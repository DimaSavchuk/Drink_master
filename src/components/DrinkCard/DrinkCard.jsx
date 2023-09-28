import { FiTrash2 } from 'react-icons/fi';
import {
  Card as StyledCard,
  DrinkTitle,
  DrinkStat,
  DrinkDesc,
  DrinkBtnContainer,
  SeeMoreLink,
  DeleteCardBtn,
  DrinkImage,
} from '../DrinkCard/DrinkCard.styled';
import placeholder from '../../assets/block.jpg';
import plaseholder2x from '../../assets/block@2x.jpg';

const DrinkCard = ({ cardData, onDelete }) => {
  const { drink, description, alcoholic, _id, drinkThumb } = cardData;

  const isRetina = () => {
    if (window.matchMedia) {
      const mq = window.matchMedia('only screen and (min-resolution: 192dpi)');
      return mq.matches;
    }
    return false;
  };

  return (
    <StyledCard>
      <picture>
        <DrinkImage
          src={drinkThumb}
          alt="coctail"
          loading="lazy"
          onError={(e) => {
            e.target.src = isRetina() ? plaseholder2x : placeholder;
          }}
        />
      </picture>
      <DrinkTitle>{drink}</DrinkTitle>
      <DrinkStat>{alcoholic}</DrinkStat>
      <DrinkDesc>{description}</DrinkDesc>
      <DrinkBtnContainer>
        <SeeMoreLink to={`/drinks/${_id}`}>See more</SeeMoreLink>
        <DeleteCardBtn type="button" id={_id} onClick={() => onDelete(_id)}>
          <FiTrash2 size={24} />
        </DeleteCardBtn>
      </DrinkBtnContainer>
    </StyledCard>
  );
};

export default DrinkCard;
