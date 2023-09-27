import { useEffect, useRef, useState } from 'react';
import {
  CustomSelect,
  DropMenu,
  Label,
  SelectWrapper,
} from './AddDrinkSelectMenu.styled';
import { SelectOpenArrow } from '../SelectOpenArrow/SelectOpenArrow';
import { useField } from 'formik';

const AddDrinkDropdownMenu = ({ items, title }) => {
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
        <div style={{ display: 'flex' }}>
          <span>{selectedValue ? selectedValue : items[0]}</span>
          <SelectOpenArrow isOpen={isOpen} />
        </div>
      </CustomSelect>
      {isOpen && (
        <DropMenu>
          {items.map((item, index) => (
            <div key={index} onClick={() => handleClickItem(item)}>
              {item}
            </div>
          ))}
        </DropMenu>
      )}
    </SelectWrapper>
  );
};

export default AddDrinkDropdownMenu;