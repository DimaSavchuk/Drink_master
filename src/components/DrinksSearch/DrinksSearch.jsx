import { useEffect } from "react";
import sprite from "../../assets/sprite.svg"
import { SelectList } from "../SelectList/SelectList";
import { Button, Form, Input, SearchIconWrap, SearchWrapper, } from "./DrinksSearch.styled";
import { useState } from "react";
import { fetchCategories, fetchIngredients } from "../../redux/filters/filtersOperations";
import { fetchCocktailsByParams } from "../../redux/drinks/drinksOperations";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, selectIngredients} from "../../redux/filters/selectors";
import { useSearchParams } from "react-router-dom";


export const DrinksSearch = ({ shouldRenderBtn, page, limit}) => {
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const categories = useSelector(selectCategories);
    const ingredients = useSelector(selectIngredients);

    const ingredientsNames = ingredients.map(ingredient => ingredient.title);

    const getUrlParams = () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
    
        const queryParams = {};
        for (const [key, value] of urlSearchParams.entries()) {
            queryParams[key] = value;
        }

        return queryParams;
    }

    const { cocktailName, categoryName, ingredientName } = getUrlParams();
    const [inputValue, setInputValue] = useState(cocktailName ? cocktailName : "");

    useEffect(() => {
        if (!categories.length) dispatch(fetchCategories());
        if (!ingredients.length) dispatch(fetchIngredients());
    }, [categories.length, ingredients.length, dispatch]);

    useEffect(() => {
        const getFilteredCocktails = async () => {
            const params = {};
        
            if (cocktailName) {
                params.drink = cocktailName;
            }
        
            if (categoryName) {
                params.category = categoryName;
            }
        
            if (ingredientName) {
                params["ingredients.title"]=ingredientName;
            }

            params.page = page;
            params.limit = limit;

            dispatch(fetchCocktailsByParams(params));
            
        }
        getFilteredCocktails()
    }, [searchParams, cocktailName, categoryName, ingredientName, page, limit, dispatch ]);

    const updateSearchParams = (paramName, paramValue, zeroValue) => {
        const queryParams = getUrlParams();

        if (paramValue!==zeroValue) {
            queryParams[paramName] = paramValue;
        } else {
            delete queryParams[paramName];
        }
    
        const searchString = new URLSearchParams(queryParams).toString();
        window.history.pushState({}, '', `?${searchString}`);
        setSearchParams(queryParams);
    };

    const handleSearchByValue = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const cocktailName = form.elements.query.value.trim();
        updateSearchParams("cocktailName", cocktailName, "");
    };

    const handleSearchByCategory = (categoryName) => {
        updateSearchParams("categoryName", categoryName, "All categories");
    };

    const handleSearchByIngredient = (ingredientName) => {
        updateSearchParams("ingredientName", ingredientName, "Ingredients");
    };

    return (
        <SearchWrapper>
            <Form onSubmit={handleSearchByValue}>
                <label>
                    <Input
                        type="text"
                        placeholder="Enter the text"
                        name="query"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                {shouldRenderBtn &&
                    <Button type="submit">
                        <SearchIconWrap>
                            <use href={`${sprite}#icon-search`} />
                        </SearchIconWrap>
                    </Button>}
            </Form>
            <SelectList items={categories} placeholder={categoryName || "All categories"} onSelect={handleSearchByCategory} />
            <SelectList items={ingredientsNames} placeholder={ingredientName || "Ingredients"} height="295px" onSelect={handleSearchByIngredient} />
        </SearchWrapper>
    );
};