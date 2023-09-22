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

const MyDrinksContainer = () => {
  const [cards, setCards] = useState(initcards);

  const handleDelete = (id) => {
    const displayedCards = cards.filter((card) => card.id !== id);
    setCards(displayedCards);
  };

  return (
    <Section>
      <Gradient />
      <CommonContainer>
        <div>
          <Title>My drinks</Title>
          {cards.length > 0 ? (
            <CardsContainer>
              {cards.map((card) => (
                <DrinkCard
                  key={card.id}
                  cardData={card}
                  onDelete={handleDelete}
                />
              ))}
            </CardsContainer>
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