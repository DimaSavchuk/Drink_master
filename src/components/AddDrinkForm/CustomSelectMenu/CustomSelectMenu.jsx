import { useEffect, useRef, useState } from 'react';
import {
  CustomSelect,
  DropMenu,
  Label,
  PlaceholderWrap,
  SearchInput,
  SelectItem,
  SelectWrapper,
} from './CustomSelectMenu.styled';
import { SelectOpenArrow } from '../../SelectOpenArrow/SelectOpenArrow';
import { useField } from 'formik';
import { ErrorText } from '../TitleBlock/TitleBlock.styled';

const CustomSelectMenu = ({ items, title, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const selectRef = useRef();
  const searchInputRef = useRef();
  const dropdownMenuRef = useRef();

  const titleValue = title.toLowerCase();
  const filteredItems = (value) =>
    items.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  const [, , { setValue }] = useField({ name: titleValue });

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickItem = (item) => {
    setSelectedValue(item);
    toggleMenu();
    setValue(item);
    setSearchQuery('');
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
  });

  return (
    <SelectWrapper>
      <CustomSelect type="button" ref={selectRef} menuOpen={isOpen}>
        <Label>{title}</Label>
        {items && (
          <PlaceholderWrap selected={selectedValue}>
            <span>{selectedValue ? selectedValue : ''}</span>
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
            {filteredItems(searchQuery).map((item, index) => (
              <SelectItem key={index} onClick={() => handleClickItem(item)}>
                {item}
              </SelectItem>
            ))}
          </DropMenu>
        </>
      )}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </SelectWrapper>
  );
};

export default CustomSelectMenu;
