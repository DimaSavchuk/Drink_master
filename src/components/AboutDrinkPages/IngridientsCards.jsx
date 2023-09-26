import {
  IngredientsDiv,
  IngredientFoto,
  InfoDiv,
  TitleIngridient,
  Measure,
} from './IngridientsCards.styled';
import { Placeholder } from './Placeholder';

const IngredientsCards = ({ data }) => {
  return (
    <IngredientsDiv>
      {data.map(({ title, measure, thumbMedium }) => (
        <li key={title}>
          <IngredientFoto>
            {thumbMedium ? (
              <img
                src={
                  thumbMedium
                    ? thumbMedium
                    : 'http://res.cloudinary.com/dec1shvoo/image/upload/v1689169611/cocktails-v1/ingredient/Strawberries-Small.png'
                }
                alt={title}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            ) : (
              <Placeholder />
            )}
          </IngredientFoto>
          <InfoDiv>
            <TitleIngridient>{title}</TitleIngridient>
            <Measure>{measure ? measure : ' '}</Measure>
          </InfoDiv>
        </li>
      ))}
    </IngredientsDiv>
  );
};
export default IngredientsCards;
