import {
  IngredientsDiv,
  IngredientFoto,
  InfoDiv,
  TitleIngridient,
  Measure,
} from './IngridientsCards.styled';
import { Placeholder } from './Placeholder';
import { useState } from 'react';

const IngredientsCards = ({ data }) => {
  // const [isImage, setisImage] = useState(null);

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
        );
      })}
    </IngredientsDiv>
  );
};
export default IngredientsCards;
