import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import DrinkCard from '../DrinkCard/DrinkCard';
import { Gradient, Section, Title } from './FavoritesContainer.styled';

export const FavoritesContainer = () => {
  return (
    <Section>
      <Gradient />
      <CommonContainer>
        <div>
          <Title>Favorites</Title>
          <DrinkCard />
        </div>
      </CommonContainer>
    </Section>
  );
};
