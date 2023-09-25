import {
  CardContainer,
  CocktailInfo,
  CocktailName,
  Image,
  StyledCocktailLink,
} from './Cocktail.styled';

export const CocktailCard = ({ data }) => {
  const { _id: id, drink: cocktailName, drinkThumb: imgLink } = data;
  return (
    <CardContainer>
      <Image src={imgLink} alt={`${cocktailName} photo`} />
      <CocktailInfo>
        <CocktailName>{cocktailName}</CocktailName>
        <StyledCocktailLink to={`/drinks/${id}`}>See more</StyledCocktailLink>
      </CocktailInfo>
    </CardContainer>
  );
};
