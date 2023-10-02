import { useEffect, useRef, useState } from 'react';
import {
  CustomSelect,
  DropMenu,
  SearchInput,
  SelectItem,
  SelectWrapper,
} from './Ingredients.styled';
import { SelectOpenArrow } from '../../SelectOpenArrow/SelectOpenArrow';
import { useField } from 'formik';
import { ErrorText } from '../../AddDrinkTitle/AddDrinkTitle.styled';

const Ingredients = (ingredientsItem) => {
  const { items, title, error, ingredient } = ingredientsItem ?? {};

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState({ id: '', title: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const selectRef = useRef();
  const searchInputRef = useRef();
  const dropdownMenuRef = useRef();

  const titleValue = title.toLowerCase();

  const filteredItems = (value) =>
    items.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

  const [, , { setValue }] = useField({ name: titleValue });

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickItem = (item) => {
    console.log('item =>', item);
    setSelectedValue(item);
    toggleMenu();
    setValue(item.title);
    setSearchQuery('');

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
      <CustomSelect type="button" ref={selectRef}>
        {items && (
          <div style={{ display: 'flex' }}>
            <span>{selectedValue.title ? selectedValue.title : ''}</span>
            <SelectOpenArrow isOpen={isOpen} />
          </div>
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
              <SelectItem key={item.id} onClick={() => handleClickItem(item)}>
                {item.title}
              </SelectItem>
            ))}
          </DropMenu>
        </>
      )}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </SelectWrapper>
  );
};

export default Ingredients;
