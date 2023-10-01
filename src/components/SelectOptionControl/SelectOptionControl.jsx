import { SelectOpenArrowBlack } from '../SelectOpenArrow/SelectOpenArrowBlack';
import {
  OptionControl,
  OptionControlValue,
} from './SelectOptionControl.styled';

export const SelectOptionControl = ({
  handleControlClick,
  selectedOption,
  isOpen,
}) => {
  return (
    <OptionControl onClick={handleControlClick}>
      <OptionControlValue>{selectedOption}</OptionControlValue>
      <SelectOpenArrowBlack isOpen={isOpen} />
    </OptionControl>
  );
};
