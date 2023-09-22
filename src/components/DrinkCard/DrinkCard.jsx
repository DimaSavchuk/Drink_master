import { useState } from 'react';
import {
  Card,
  CardsContainer,
  DeleteCardBtn,
  DrinkDesc,
  DrinkStat,
  DrinkTitle,
  PaginationButton,
  PaginationContainer,
  PaginationNumber,
  SeeMoreLink,
} from './DrinkCard.styled';
import { FiTrash2 } from 'react-icons/fi';
import {
  Container,
  Text,
} from '../FavoritesContainer/FavoritesContainer.styled';
import initcards from './cards.json';

const ITEMS_PER_PAGE = 9;

const DrinkCard = () => {
  const [cards, setCards] = useState(initcards);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
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
    <>
      {displayedCards.length > 0 ? (
        <>
          <CardsContainer>
            {displayedCards.map(({ title, description, type, id, img }) => (
              <Card key={id}>
                <picture>
                  <img
                    style={{ marginBottom: '24px', borderRadius: '8px' }}
                    src={img}
                    // srcSet="src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
                    alt="coctail"
                    loading="lazy"
                  />
                </picture>
                <DrinkTitle>{title}</DrinkTitle>
                <DrinkStat>{type}</DrinkStat>
                <DrinkDesc>{description}</DrinkDesc>
                <SeeMoreLink to={`/drink/${id}`}>See more</SeeMoreLink>
                <DeleteCardBtn
                  type="button"
                  id={id}
                  onClick={() => handleDelete(id)}
                >
                  <FiTrash2 />
                </DeleteCardBtn>
              </Card>
            ))}
          </CardsContainer>
          <PaginationContainer>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </PaginationButton>

            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationNumber
                active={index + 1 === currentPage}
                key={index}
                onClick={() => handlePageChange(index + 1)}
                disabled={index + 1 === currentPage}
              >
                {index + 1}
              </PaginationNumber>
            ))}

            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </PaginationButton>
          </PaginationContainer>
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
    </>
  );
};

export default DrinkCard;
