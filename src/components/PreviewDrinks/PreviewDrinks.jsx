import { useState } from "react";
import { CocktailCard } from "../CocktailCard/CocktailCard"
import { CommonLink } from "../CommonLink/CommonLink";
import { CommonContainer } from "../GlobalStyles/CommonContainer.styled";
import { CategoriesList, CategoryName, CocktailsWrap, PreviewSection, Wrapper } from "./PreviewDrinks.styled";
import { useEffect } from "react";
import { fetchHomePageCocktails } from "../../services/axiosConfig";
import { Loader } from "../Loader/Loader";

export const PreviewDrinks = ({ numbCocktailsToShow }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const getCocktails = async () => {
            setIsLoading(true);
            const resp = await fetchHomePageCocktails();
            setCocktails(resp);
            setIsLoading(false);
        }
        getCocktails()
    }, []);

    return (
        <PreviewSection>
            <CommonContainer>
                {isLoading ? <Loader /> :
                    <Wrapper>
                        <CategoriesList>
                            {cocktails.map(item => {
                                return (
                                    <li key={item.categoryName}>
                                        <CategoryName>{item.category}</CategoryName>
                                        <CocktailsWrap>
                                            {item.drinks
                                                .slice(0, numbCocktailsToShow)
                                                .map(cocktail => (
                                                    <li key={cocktail.id}>
                                                        <CocktailCard data={cocktail} />
                                                    </li>
                                                ))}
                                        </CocktailsWrap>
                                    </li>
                                )
                            })}
                        </CategoriesList>
                        <CommonLink navigateTo="/drinks">Other drinks</CommonLink>
                    </Wrapper>}
            </CommonContainer>
        </PreviewSection>
    );
};