import { useEffect, useRef, useState } from 'react';
import {
  CustomSelect,
  DropMenu,
  PlaceholderWrap,
  SearchInput,
  SelectItem,
  SelectWrapper,
} from './IngredientsMenu.styled';
import { ErrorTextIngredients } from '../IngredientsBlock/IngredientsBlock.styled';
import { SelectOpenArrow } from '../../SelectOpenArrow/SelectOpenArrow';
import { ErrorMessage, useField } from 'formik';

const IngredientsMenu = ({ items, title, ingredient, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ id: '', title: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [isValue, setIsValue] = useState(false);

  const selectRef = useRef();
  const searchInputRef = useRef();
  const dropdownMenuRef = useRef();

  const titleValue = title.toLowerCase();

  const [, meta, helpers] = useField(`ingredients.${index}.title`);

  const filteredItems = (value) =>
    items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickItem = (item) => {
    setSelectedValue(item);
    toggleMenu();
    setSearchQuery('');
    setIsValue(true);

    ingredient.title = item.title;
    ingredient.ingredientId = item._id;

    helpers.setError('');
  };

  useEffect(() => {
    if (searchInputRef) {
      setSearchQuery('');
      if (isOpen && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (selectRef.current && selectRef.current.contains(e.target)) {
        setIsOpen(true);
      }
      if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  return (
    <SelectWrapper>
      <CustomSelect type="button" ref={selectRef} menuOpen={isOpen}>
        {items && (
          <PlaceholderWrap selected={isValue}>
            <span>{ingredient.title ? ingredient.title : 'Select'}</span>

            <SelectOpenArrow isOpen={isOpen} />
          </PlaceholderWrap>
        )}
      </CustomSelect>
      {isOpen && items && (
        <>
          <DropMenu ref={dropdownMenuRef}>
            {items.length > 20 && (
              <SearchInput
                ref={searchInputRef}
                type="text"
                name={`${titleValue}Filter`}
                placeholder="Search..."
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            )}
            {filteredItems(searchQuery).map((item) => (
              <SelectItem key={item._id} onClick={() => handleClickItem(item)}>
                {item.title}
              </SelectItem>
            ))}
          </DropMenu>
        </>
      )}
      {meta.error && meta.touched && (
        <ErrorMessage name={`ingredients.${index}.title`}>
          {(msg) => <ErrorTextIngredients>{msg}</ErrorTextIngredients>}
        </ErrorMessage>
      )}
    </SelectWrapper>
  );
};

export default IngredientsMenu;
