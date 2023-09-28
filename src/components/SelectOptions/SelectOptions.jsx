import { useSelector } from "react-redux";
import { Option, OptionsContainer } from "./SelectOptions.styled"
import { selectIsLoading } from "../../redux/filters/selectors";

export const SelectOptions = ({ handleSelect, height, items }) => {
    const isLoading = useSelector(selectIsLoading);
    
    return (
        <OptionsContainer onClick={handleSelect} height={height}>
            {isLoading ? <p>Loading...</p> : items.map(item => (
                <li key={item}>
                    <Option>{item}</Option>
                </li>
            ))}
        </OptionsContainer>
    )
       

} 