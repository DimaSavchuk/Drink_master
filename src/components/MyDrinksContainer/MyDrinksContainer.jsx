import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import DrinkCard from '../DrinkCard/DrinkCard';
import {
  Section,
  Title,
} from '../FavoritesContainer/FavoritesContainer.styled';
import { useEffect, useState } from 'react';
import { CardsContainer } from '../DrinkCard/DrinkCard.styled';
import { deleteDrinkFromOwn, fetchOwnDrinks } from '../../services/axiosConfig';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Paginator } from '../Paginator/Paginator';
import { InfoComponent } from '../InfoComponent/InfoComponent';

const MyDrinksContainer = () => {
  const [cards, setCards] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page')
    ? Number(searchParams.get('page')) - 1
    : 0;
  const [currentPage, setCurrentPage] = useState(page);
  const [limit, setLimit] = useState(null);
  useState(false);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const ownDrinks = await fetchOwnDrinks();
        setCards(ownDrinks);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const pagesVisited = currentPage * limit;

  const updLimit = () => {
    if (window.innerWidth >= 1440) {
      setLimit(9);
      setPageRangeDisplayed(6);
    } else if (window.innerWidth >= 768) {
      setLimit(8);
    } else {
      setLimit(8);
      setPageRangeDisplayed(3);
    }
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

  const handlePageChange = (page) => {
    setSearchParams({ page: page + 1 });
    setCurrentPage(page);
  };

  const handleDelete = (_id) => {
    const updatedCards = cards.filter((card) => card._id !== _id);
    setCards(updatedCards);

    deleteDrinkFromOwn(_id);
  };

  const displayedCards = cards
    .slice(pagesVisited, pagesVisited + limit)
    .map((card) => (
      <li key={card._id}>
        <DrinkCard cardData={card} onDelete={handleDelete} />
      </li>
    ));

  return (
    <Section>
      <CommonContainer>
        <div>
          <Title>My drinks</Title>
          {isloading ? (
            <Loader />
          ) : cards.length > 0 ? (
            <>
              <CardsContainer>{displayedCards}</CardsContainer>
              <Paginator
                limit={limit}
                currentPage={currentPage}
                itemsLength={cards.length}
                handlePageChange={handlePageChange}
                pageRangeDisplayed={pageRangeDisplayed}
              />
            </>
          ) : <InfoComponent>You haven't added any own cocktails yet</InfoComponent>}
        </div>
      </CommonContainer>
    </Section>
  );
};

export default MyDrinksContainer;
