
import { Form, Input, } from "./DrinksSearch.styled";
import { useState } from "react";

export const DrinksSearch = ({ categories }) => {
  
    const [searchValue, setSearchValue] = useState('');


    console.log(categories)
    return (
        <Form>
            <label>
                <Input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Enter the text"
                />
            </label>
            {/* <label htmlFor="categories"></label>
            <Select name="categories"
                id="categories"
                defaultValue={""}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
            >
                <option hidden value="">All categories</option>
                {categories.map(category => (
                    <option key={nanoid()} value={category}>{category}</option>
                ))}
            </Select> */}
        </Form>
    );
};