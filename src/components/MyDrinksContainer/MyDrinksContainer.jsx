import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import DrinkCard from '../DrinkCard/DrinkCard';
import {
  Container,
  Gradient,
  Section,
  Text,
  Title,
} from '../FavoritesContainer/FavoritesContainer.styled';
import initcards from '../DrinkCard/cards.json';
import { useState } from 'react';
import { CardsContainer } from '../DrinkCard/DrinkCard.styled';
import Pagination from '../Pagination/Pagination';

const ITEMS_PER_PAGE = 9;

const MyDrinksContainer = () => {
  const [cards, setCards] = useState(initcards);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);

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
    }
  };

  return (
    <Section>
      <Gradient />
      <CommonContainer>
        <div>
          <Title>My drinks</Title>
          {displayedCards.length > 0 ? (
            <>
              <CardsContainer>
                {displayedCards.map((card) => (
                  <DrinkCard
                    key={card.id}
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
                <Text>You haven't added any own cocktails yet</Text>
              </Container>
            </div>
          )}
        </div>
      </CommonContainer>
    </Section>
  );
};

export default MyDrinksContainer;
