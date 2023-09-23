import { Option, OptionsContainer } from "./SelectOptions.styled"

export const SelectOptions = ({ handleSelect, height, items }) => {
    return (
        <OptionsContainer onClick={handleSelect} height={height}>
            {items.map(item => (
                <li key={item}>
                    <Option>{item}</Option>
                </li>
            ))}
        </OptionsContainer>
    )
       

} 