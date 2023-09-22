import { CocktailCard } from '../../components/CocktailCard/CocktailCard';
import { DrinksSearch } from '../../components/DrinksSearch/DrinksSearch';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import { PageTitle } from '../../components/PageTitle/PageTitle';

import { CocktailsList, DrinksSection } from './DrinksPages.styled';
import receipes from "./recipes.json";
const categories = ["Ordinary Drink", "Cocktail", "Snake", "Other/Unknow", "Cocoa"];

const DrinksPages = () => {
  

  return (
    <DrinksSection>
      <CommonContainer>
        <PageTitle>Drinks</PageTitle>
        <DrinksSearch categories={categories} />
        <CocktailsList>
      {receipes.map(cocktail => (
        <li key={cocktail.id}>
          <CocktailCard data={cocktail} />
        </li>
      ))}
    </CocktailsList>
      </CommonContainer>
    </DrinksSection>
    
    


  )
};

export default DrinksPages;
