import { CommonContainer } from '../GlobalStyles/CommonContainer.styled';
import DrinkCard from '../DrinkCard/DrinkCard';
import {
  Gradient,
  Section,
  Title,
} from '../FavoritesContainer/FavoritesContainer.styled';

export const MyDrinksContainer = () => {
  return (
    <Section>
      <Gradient />
      <CommonContainer>
        <div>
          <Title>My drinks</Title>

          <DrinkCard />

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
    </Section>
  );
};
