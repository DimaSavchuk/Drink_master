import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import {
  Section,
  Title,
} from '../FavoritesContainer/FavoritesContainer.styled';
import { CardsContainer } from '../DrinkCard/DrinkCard.styled';
import { Paginator } from '../Paginator/Paginator';
import { Loading } from '../Loading/Loading';

import { InfoComponent } from '../InfoComponent/InfoComponent';
import {
  checkAndSetPage,
  countElements,
  displayedOwnCards,
  fetchOwn,
  handlePageChange,
  updLimit,
} from '../../helpers';
import { getUrlParams } from '../../helpers/getUrlParams';
import { useDispatch } from 'react-redux';
import { setSelectedRoute } from '../../redux/route/routeSlice';
import { LittleLoading } from '../Loading/LittleLoading';

const MyDrinksContainer = () => {
  const [cards, setCards] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page')
    ? Number(searchParams.get('page')) - 1
    : 0;
  const [currentPage, setCurrentPage] = useState(page);
  const [limit, setLimit] = useState(null);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(3);
  const [showPagination, setShowPagination] = useState(false);
  const allParams = getUrlParams();

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchOwn(setIsloading, setCards);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(allParams).toString();
    dispatch(setSelectedRoute(`${location.pathname}?${params}`));
  }, [dispatch, location, allParams]);

  const pagesVisited = currentPage * limit;

  useEffect(() => {
    const { newLimit, newPageRangeDisplayed } = updLimit();
    setLimit(newLimit);
    setPageRangeDisplayed(newPageRangeDisplayed);

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
    if (cards.length > limit) {
      setShowPagination(true);
    } else {
      setShowPagination(false);
    }
  }, [cards.length, limit]);

  const { numberOfElementsOnPage } = countElements(cards, currentPage, limit);

  useEffect(() => {
    checkAndSetPage(
      numberOfElementsOnPage,
      currentPage,
      setSearchParams,
      setCurrentPage,
    );
  }, [numberOfElementsOnPage, currentPage, setSearchParams]);

  const displayedCards = displayedOwnCards(
    cards,
    pagesVisited,
    limit,
    setCards,
  );

  return (
    <Section>
      <CommonContainer>
        <div>
          <Title>My drinks</Title>
          {isloading ? (
            <LittleLoading />
          ) : cards.length > 0 ? (
            <>
              <CardsContainer>{displayedCards}</CardsContainer>
              {showPagination && (
                <Paginator
                  limit={limit}
                  currentPage={currentPage}
                  itemsLength={cards.length}
                  handlePageChange={(page) =>
                    handlePageChange(page, setSearchParams, setCurrentPage)
                  }
                  pageRangeDisplayed={pageRangeDisplayed}
                />
              )}
            </>
          ) : (
            <InfoComponent>
              You haven't added any own cocktails yet
            </InfoComponent>
          )}
        </div>
      </CommonContainer>
    </Section>
  );
};

export default MyDrinksContainer;
