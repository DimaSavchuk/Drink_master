import { CocktailCard } from "../CocktailCard/CocktailCard"
import { CommonLink } from "../CommonLink/CommonLink";
import { CommonContainer } from "../GlobalStyles/CommonContainer.styled";
import { CategoriesList, CategoryName, CocktailsWrap, PreviewSection, Wrapper } from "./PreviewDrinks.styled";

export const PreviewDrinks = ({ items, numbCocktailsToShow }) => {
    return (
        <PreviewSection>
            <CommonContainer>
                <Wrapper>
                    <CategoriesList>
                        {items.map(item => {
                            return (
                                <li key={item.categoryName}>
                                    <CategoryName>{item.categoryName}</CategoryName>
                                    <CocktailsWrap>
                                        {item.cocktails
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
                </Wrapper>
            </CommonContainer>
        </PreviewSection>
    );
};