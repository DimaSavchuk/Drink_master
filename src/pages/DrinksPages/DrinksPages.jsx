import { useEffect, useState } from 'react';
import { CocktailCard } from '../../components/CocktailCard/CocktailCard';
import { DrinksSearch } from '../../components/DrinksSearch/DrinksSearch';
import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import { PageTitle } from '../../components/PageTitle/PageTitle';
import { Paginator } from '../../components/Paginator/Paginator';
import { CocktailsList, DrinksSection } from './DrinksPages.styled';
import { useSearchParams } from 'react-router-dom';
import { fetchAllDrinks } from '../../services/axiosConfig';
import { Loader } from '../../components/Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage';

const categories = ["Ordinary Drink", "Cocktail", "Snake", "Other/Unknow", "Cocoa"];

const DrinksPages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageFromUrl = searchParams.get('page') ? Number(searchParams.get('page')) - 1 : 0;
  
  const [cocktails, setCocktails] = useState([]);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [limit, setLimit] = useState(10);
  const [shouldRenderButtonSearch, setShouldRenderButtonSearch] = useState(false);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);
  const [isLimitUpdated, setIsLimitUpdated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const updLimit = () => {
    setIsLimitUpdated(false);
    if (window.innerWidth >= 1440) {
      setLimit(9);
      setShouldRenderButtonSearch(true)
      setPageRangeDisplayed(6);
    } else if (window.innerWidth >= 768) {
      setLimit(10);
      setShouldRenderButtonSearch(true)
    } else {
      setLimit(10);
      setPageRangeDisplayed(3);
      setShouldRenderButtonSearch(false)
    }
    setIsLimitUpdated(true);
  };

  useEffect(() => {
    updLimit();

    window.addEventListener('resize', updLimit);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return () => {
      window.removeEventListener('resize', updLimit);
    };
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      const resp = await fetchAllDrinks({ page: currentPage + 1, limit });
      setCocktails(resp);
      setIsLoading(false);
    }
    if(isLimitUpdated) fetchAll();
  }, [currentPage, limit, isLimitUpdated])

  // if(page>cocktails.length/limit) return <p>Error</p>
  if (currentPage+1 > Math.ceil(451 / limit)) return <ErrorPage />

  const displayCocktails = cocktails
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
        {isLoading && <Loader />}
        {cocktails.length && !isLoading &&
          <div>
            <DrinksSearch categories={categories} shouldRenderBtn={shouldRenderButtonSearch} />
            <CocktailsList>
              {displayCocktails}
            </CocktailsList>
            <Paginator
              limit={limit}
              currentPage={currentPage}
              // itemsLength={cocktails.length}
              itemsLength={451}
              handlePageChange={handlePageChange}
              pageRangeDisplayed={pageRangeDisplayed}
            />
          </div>}
          
      </CommonContainer>
    </DrinksSection>
  );
};

export default DrinksPages;
