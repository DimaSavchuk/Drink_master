import { useState } from 'react';
import {
  Card,
  CardsContainer,
  DeleteCardBtn,
  DrinkDesc,
  DrinkStat,
  DrinkTitle,
  SeeMoreLink,
} from './DrinkCard.styled';
import { FiTrash2 } from 'react-icons/fi';
import {
  Container,
  Text,
} from '../FavoritesContainer/FavoritesContainer.styled';

const initialState = [
  {
    id: 1,
    title: 'Berry Deadly',
    description:
      'Berry deadly is a popular Wine cocktailcontaining a combinations of Everclear Alcohol,Boone`s Farm Strawberry Hill Wine,Orange Juice,Kool-Aid Berry Blue Mix.',
    type: 'Alcoholic',
    img: 'src/assets/hero/1.jpg',
  },
  {
    id: 2,
    title: 'Blueberry Mojito',
    description:
      'These mojitos are simple to make and are adapted from our classic mojito recipe. You can use fresh or thawed frozen blueberries for this, so while it may look like a summer drink, this is totally doable all year round. (As long as you can find mint, that is).',
    type: 'Alcoholic',
    img: 'src/assets/hero/2.jpg',
  },
  {
    id: 3,
    title: 'Greyhound',
    description:
      'A greyhound is a cocktail consisting of grapefruit juice and gin mixed and served over ice. If the rim of the glass has been salted, the drink is instead called a salty dog.',
    type: 'Alcoholic',
    img: 'src/assets/hero/3.jpg',
  },
  {
    id: 4,
    title: 'English Rose Cocktail',
    description:
      'This beautiful gin cocktail combines apricot brandy, dry vermouth, grenadine, lemon juice, and gin, and tastes like a much fruitier version of the classic martini. Rim and garnish with sugar and cherries for a little extra sweet cocktail goodness.',
    type: 'Alcoholic',
    img: 'src/assets/hero/4.jpg',
  },
];

const DrinkCard = () => {
  const [cards, setCards] = useState(initialState);

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };
  return (
    <>
      {cards.length > 0 ? (
        <CardsContainer>
          {cards.map(({ title, description, type, id, img }) => (
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
              <SeeMoreLink to="/">See more</SeeMoreLink>
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
