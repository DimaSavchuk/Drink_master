import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import { Gradient, Section, Title } from './FavoritesContainer.styled';
import { useEffect, useState } from 'react';
import { CardsContainer } from '../DrinkCard/DrinkCard.styled';
import {
  Container,
  Text,
} from '../FavoritesContainer/FavoritesContainer.styled';
import DrinkCard from '../DrinkCard/DrinkCard';
import Pagination from '../Pagination/Pagination';
import { deleteDrinkFromFavorite, fetchFavoriteDrinks } from '../../services/axiosConfig';

const ITEMS_PER_PAGE = 9;

const FavoritesContainer = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const favoriteDrinks = await fetchFavoriteDrinks();
       setCards(favoriteDrinks);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (_id) => {
    const updatedCards = cards.filter((card) => card._id !== _id);
    setCards(updatedCards);

    deleteDrinkFromFavorite(_id);

    const currentPageBeforeDelete = currentPage;

    if (isCurrentPageEmpty(updatedCards, currentPageBeforeDelete)) {
      setCurrentPage(currentPageBeforeDelete - 1);
    }
  };

  const isCurrentPageEmpty = (updatedCards, currentPage) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const displayedCards = updatedCards.slice(startIndex, endIndex);
    return displayedCards.length === 0;
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const displayedCards = cards.slice(startIndex, endIndex);

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <Section>
      <Gradient />
      <CommonContainer>
        <div>
          <Title>Favorites</Title>
          {displayedCards.length > 0 ? (
            <>
              <CardsContainer>
                {displayedCards.map((card) => (
                  <DrinkCard
                    key={card._id}
                    cardData={card}
                    onDelete={handleDelete}
                  />
                ))}
              </CardsContainer>
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handlePageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div>
              <picture>
                <img
                  style={{ margin: '0 auto' }}
                  src="src/assets/hero/asr_blue_iced_tea_mobile 1.png"
                  srcSet="src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
                  alt="coctail"
                  loading="lazy"
                />
              </picture>
              <Container>
                <Text>You haven't added any favorite cocktails yet</Text>
              </Container>
            </div>
          )}
        </div>
      </CommonContainer>
    </Section>
  );
};

export default FavoritesContainer;
