import { useEffect, useState } from 'react';
import { CocktailCard } from '../../components/CocktailCard/CocktailCard';
import { DrinksSearch } from '../../components/DrinksSearch/DrinksSearch';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Paginator } from '../../components/Paginator/Paginator';


import { CocktailsList, DrinksSection } from './DrinksPages.styled';
import receipes from "./recipes.json";
import { useSearchParams } from 'react-router-dom';
const categories = ["Ordinary Drink", "Cocktail", "Snake", "Other/Unknow", "Cocoa"];

const DrinksPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ? Number(searchParams.get('page')) - 1 : 0;
  
  const [cocktails, setCocktails] = useState(receipes);
  const [currentPage, setCurrentPage] = useState(page);
  const [limit, setLimit] = useState(10);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);

  const pagesVisited = currentPage * limit;

  const updLimit = () => {
      if (window.innerWidth >= 1440) {
        setLimit(9);
        setPageRangeDisplayed(6);
      } else {
        setLimit(10);
        setPageRangeDisplayed(3);
      }
  };

  useEffect(() => {
      updLimit();
      window.addEventListener('resize', updLimit);

      return () => {
          window.removeEventListener('resize', updLimit);
      };
  }, []);

  if(page>cocktails.length/limit) return <p>Error</p>

  const displayCocktails = cocktails
    .slice(pagesVisited, pagesVisited + limit)
    .map((cocktail) => (
      <li key={cocktail.id}>
        <CocktailCard data={cocktail} />
      </li>
    ));
  
  const handlePageChange = (page) => {
    setSearchParams({ page: page + 1 });
    setCurrentPage(page);
    
  };
  

  return (
    <DrinksSection>
      <CommonContainer>
        <PageTitle>Drinks</PageTitle>
        <DrinksSearch categories={categories} />
        <CocktailsList>
        {displayCocktails}
    </CocktailsList>
        <Paginator
          limit={limit}
          currentPage={currentPage}
          itemsLength={cocktails.length}
          handlePageChange={handlePageChange}
          pageRangeDisplayed={pageRangeDisplayed}
        />
        
      </CommonContainer>
    </DrinksSection>
    
    


  )
};

export default DrinksPages;
