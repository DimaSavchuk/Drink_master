import {
  IngredientsDiv,
  IngredientFoto,
  InfoDiv,
  TitleIngridient,
  Measure,
} from './IngridientsCards.styled';
import { Placeholder } from './Placeholder';

import DEFOULT from '../../assets/block.jpg';

const IngredientsCards = ({ data }) => {
  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }
  return (
    <IngredientsDiv>
      {data.map(({ title, measure, thumbMedium }, index) => {
        let image = null;
        checkIfImageExists(thumbMedium, (exists) => {
          if (exists) {
            image = true;
          } else {
            image = false;
          }
        });

        return (
          <li key={index}>
            <IngredientFoto>
              {image ? (
                <img
                  src={thumbMedium ? thumbMedium : DEFOULT}
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
        );
      })}
    </IngredientsDiv>
  );
};
export default IngredientsCards;
