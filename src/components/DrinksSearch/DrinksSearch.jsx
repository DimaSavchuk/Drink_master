import { useEffect } from "react";
import sprite from "../../assets/sprite.svg"
import { SelectList } from "../SelectList/SelectList";
import { Button, Form, Input, SearchIconWrap, SearchWrapper, } from "./DrinksSearch.styled";
import { useState } from "react";

const categori = ["Ordinary Drink", "Cocktail", "Snake", "Other/Unknow", "Cocoa", "Shot", "Coffee/Tea", "Homemade Liqueur", "Punch / Party Drink", "Beer", "Soft Drink"];
const ingred = ["Light rum", "Applejack", "Gin", "Dark rum", "Sweet Vermouth", "Strawberry", "Scotch", "Apricot brandy", "Wine", "Lemon"];

export const DrinksSearch = ({ categories, shouldRenderBtn, ingredients }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchWrapper>
            <Form>
                <label>
                    <Input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Enter the text"
                    />
                </label>
                {shouldRenderBtn &&
                    <Button type="submit">
                        <SearchIconWrap>
                            <use href={`${sprite}#icon-search`} />
                        </SearchIconWrap>
                    </Button>}
            </Form>
            <SelectList items={categori} placeholder="All categories" onSelect={setSelectedCategory} />
            <SelectList items={ingred} placeholder="Ingredients" height="295px" onSelect={setSelectedIngredient} />
        </SearchWrapper>
    );
};