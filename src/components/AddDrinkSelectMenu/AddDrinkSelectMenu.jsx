import { useEffect, useRef, useState } from 'react';
import {
  CustomSelect,
  DropMenu,
  Label,
  SelectItem,
  SelectWrapper,
} from './AddDrinkSelectMenu.styled';
import { SelectOpenArrow } from '../SelectOpenArrow/SelectOpenArrow';
import { useField } from 'formik';
import { ErrorText } from '../AddDrinkTitle/AddDrinkTitle.styled';

const AddDrinkDropdownMenu = ({ items, title, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const titleValue = title.toLowerCase();

  const [, , { setValue }] = useField({ name: titleValue });

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickItem = (item) => {
    setSelectedValue(item);
    toggleMenu();
    setValue(item);
  };

  return (
    <SelectWrapper>
      <CustomSelect type="button" onClick={toggleMenu}>
        <Label>{title}</Label>
        {items && (
          <div style={{ display: 'flex' }}>
            <span>{selectedValue ? selectedValue : items[0]}</span>
            <SelectOpenArrow isOpen={isOpen} />
          </div>
        )}
      </CustomSelect>
      {isOpen && items && (
        <DropMenu>
          {items.map((item, index) => (
            <SelectItem key={index} onClick={() => handleClickItem(item)}>
              {item}
            </SelectItem>
          ))}
        </DropMenu>
      )}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </SelectWrapper>
  );
};

export default AddDrinkDropdownMenu;
