import { useState } from "react";
import { CocktailCard } from "../CocktailCard/CocktailCard"
import { CommonLink } from "../CommonLink/CommonLink";
import { CommonContainer } from "../GlobalStyles/CommonContainer.styled";
import { BtnsWrapper, CategoriesList, CategoryName, CocktailsWrap, PreviewSection} from "./PreviewDrinks.styled";
import { useEffect } from "react";
import { fetchHomePageCocktails } from "../../services/axiosConfig";
import { Loader } from "../Loader/Loader";
import { SeeMoreBtn } from "../SeeMoreBtn/SeeMoreBtn";
import { nanoid } from "@reduxjs/toolkit";
import { InfoComponent } from "../InfoComponent/InfoComponent";

export const PreviewDrinks = ({ numbCocktailsToShow }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(4);
    const [isShowSeeMoreBtn, setIsShowSeeMoreBtn] = useState(true);

    useEffect(() => {
        const getCocktails = async () => {
            setIsLoading(true);
            const resp = await fetchHomePageCocktails();
            console.log(resp)
            if (!resp) {
                setCategories([]);
                setIsLoading(false);
                return;
            } 
            setCategories(resp);
            setIsLoading(false);
        }
        getCocktails()
    }, []);

    const handleSeeMoreBtnClick = () => {
        setLimit(categories.length);
        setIsShowSeeMoreBtn(false);
    }

    return (
        <PreviewSection>
            <CommonContainer>
                {isLoading ? <Loader /> : categories.length?
                    <div>
                        <CategoriesList>
                            {categories
                                .slice(0, limit)
                                .map(item => {
                                    return (
                                        <li key={nanoid()}>
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
                        <BtnsWrapper>
                            {isShowSeeMoreBtn && <SeeMoreBtn handleClick={handleSeeMoreBtnClick}>More categories</SeeMoreBtn>}
                            <CommonLink navigateTo="/drinks">Other drinks</CommonLink>
                        </BtnsWrapper>
                    </div>
                    :
                    <InfoComponent>Some error occured.</InfoComponent>}
            </CommonContainer>
        </PreviewSection>
    );
};