import { useEffect } from "react";
import sprite from "../../assets/sprite.svg"
import { SelectList } from "../SelectList/SelectList";
import { Button, Form, Input, SearchIconWrap, SearchWrapper, } from "./DrinksSearch.styled";
import { useState } from "react";
import { fetchCategories, fetchIngredients } from "../../services/axiosConfig";

const categori = ["Ordinary Drink", "Cocktail", "Snake", "Other/Unknow", "Cocoa", "Shot", "Coffee/Tea", "Homemade Liqueur", "Punch / Party Drink", "Beer", "Soft Drink"];
const ingred = ["Light rum", "Applejack", "Gin", "Dark rum", "Sweet Vermouth", "Strawberry", "Scotch", "Apricot brandy", "Wine", "Lemon"];

export const DrinksSearch = ({ shouldRenderBtn}) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedIngredient, setSelectedIngredient] = useState('');
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const ingredientsNames = ingredients.map(ingredient => ingredient.title);

    useEffect(() => {
        const fetchFilters = async () => {
            const allCategories = await fetchCategories();
            const allIngredients = await fetchIngredients();
            setCategories(allCategories);
            setIngredients(allIngredients);
        }
        fetchFilters();
    }, []);

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
            <SelectList items={categories} placeholder="All categories" onSelect={setSelectedCategory} />
            <SelectList items={ingredientsNames} placeholder="Ingredients" height="295px" onSelect={setSelectedIngredient} />
        </SearchWrapper>
    );
};