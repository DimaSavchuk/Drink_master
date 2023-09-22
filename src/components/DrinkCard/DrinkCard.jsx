import { FiTrash2 } from 'react-icons/fi';
import {
  Card as StyledCard,
  DrinkTitle,
  DrinkStat,
  DrinkDesc,
  SeeMoreLink,
  DeleteCardBtn,
} from '../DrinkCard/DrinkCard.styled';

const DrinkCard = ({ cardData, onDelete }) => {
  const { title, description, type, id, img } = cardData;

  return (
    <StyledCard>
      <picture>
        <img
          style={{ marginBottom: '24px', borderRadius: '8px' }}
          src={img}
          alt="coctail"
          loading="lazy"
        />
      </picture>
      <DrinkTitle>{title}</DrinkTitle>
      <DrinkStat>{type}</DrinkStat>
      <DrinkDesc>{description}</DrinkDesc>
      <SeeMoreLink to={`/drink/${id}`}>See more</SeeMoreLink>
      <DeleteCardBtn type="button" id={id} onClick={() => onDelete(id)}>
        <FiTrash2 />
      </DeleteCardBtn>
    </StyledCard>
  );
};

export default DrinkCard;
