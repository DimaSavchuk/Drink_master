import {
  Card,
  DeleteCardBtn,
  DrinkDesc,
  DrinkStat,
  DrinkTitle,
  SeeMoreLink,
} from './DrinkCard.styled';
import { FaTrash } from 'react-icons/fa';

const initialState = {
  title: 'Berry Deadly ',
  description:
    'Berry deadly is a popular Wine cocktailcontaining a combinations of Everclear Alcohol,Boone`s Farm Strawberry Hill Wine,Orange Juice,Kool-Aid Berry Blue Mix.',
  type: 'Alcoholic',
};

const DrinkCard = () => {
  const { title, description, type } = initialState;
  return (
    <Card>
      <picture>
        <img
          style={{ marginBottom: '24px', borderRadius: '8px', }}
          src="src/assets/hero/1.jpg"
          // srcSet="src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
          alt="coctail"
          loading="lazy"
        />
      </picture>
      <DrinkTitle>{title}</DrinkTitle>
      <DrinkStat>{type}</DrinkStat>
      <DrinkDesc>{description}</DrinkDesc>
      <SeeMoreLink>See more</SeeMoreLink>
      <DeleteCardBtn><FaTrash/></DeleteCardBtn>
    </Card>
  );
};

export default DrinkCard;
