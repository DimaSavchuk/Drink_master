import { useEffect, useRef, useState } from 'react';
import {
  CustomSelect,
  DropMenu,
  PlaceholderWrap,
  SearchInput,
  SelectItem,
  SelectWrapper,
} from './IngredientsMenu.styled';
import { SelectOpenArrow } from '../../SelectOpenArrow/SelectOpenArrow';
import { ErrorText } from '../TitleBlock/TitleBlock.styled';
import { ErrorMessage, useField } from 'formik';

const IngredientsMenu = ({ items, title, ingredient, index }) => {
  // const { items, title, error, ingredient } = props ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ id: '', title: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [isValue, setIsValue] = useState(false);

  const selectRef = useRef();
  const searchInputRef = useRef();
  const dropdownMenuRef = useRef();

  const titleValue = title.toLowerCase();

  const filteredItems = (value) =>
    items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

  // [field, meta, helpers]
  // const [field, meta, helpers] = useField(`ingredients.${index}`);
  // console.log(meta);
  // console.log(helpers);

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
            <span>{selectedValue.title ? selectedValue.title : 'Select'}</span>

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
                name={`${title}Filter`}
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
      {/* {meta.touched && error.title ? (
        <ErrorText>{error.title}</ErrorText>
      ) : null} */}
    </SelectWrapper>
  );
};

export default IngredientsMenu;
