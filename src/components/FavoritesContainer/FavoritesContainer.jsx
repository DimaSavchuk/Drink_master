import {CommonContainer} from '../GlobalStyles/CommonContainer.styled'
import DrinkCard from '../DrinkCard/DrinkCard';
import { CardsContainer } from '../DrinkCard/DrinkCard.styled';
import { Gradient, HeroSection, Title } from './FavoritesContainer.styled';

export const FavoritesContainer = () => {
  return (
    <HeroSection>
      <Gradient />
      <CommonContainer>
        <div>
          <Title>Favorites</Title>
          <CardsContainer>
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
          </CardsContainer>

          {/* <ImgWrapper> */}
          {/* <picture>
            <img
              style={{ margin: '0 auto' }}
              src="src/assets/hero/asr_blue_iced_tea_mobile 1.png"
              srcSet="src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
              alt="coctail"
              loading="lazy"
            />
          </picture> */}
          {/* </ImgWrapper> */}
          {/* <Container>
            <Text>You haven't added any favorite cocktails yet</Text>
          </Container> */}
        </div>
      </CommonContainer>
    </HeroSection>
  );
};
