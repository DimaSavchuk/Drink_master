import { SelectOpenArrow } from "../SelectOpenArrow/SelectOpenArrow";
import { OptionControl, OptionControlValue } from "./SelectOptionControl.styled";

export const SelectOptionControl = ({ handleControlClick, selectedOption, isOpen}) => {
    return (
        <OptionControl onClick={handleControlClick}>
            <OptionControlValue>{selectedOption}</OptionControlValue>
            <SelectOpenArrow isOpen={isOpen}/>
        </OptionControl>
    );
}