import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import {
  Container,
  Gradient,
  HeroSection,
  Text,
  Title,
} from './FavoritesHero.styled';

export const FavoritesHero = () => {
  return (
    <HeroSection>
      <Gradient />
      <CommonContainer>
        <div>
          <div>
            <Title>Favorites</Title>
          </div>
          {/* <ImgWrapper> */}
          <picture>
            <img
              style={{ margin: '0 auto' }}
              src="src/assets/hero/asr_blue_iced_tea_mobile 1.png"
              srcSet="src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
              alt="coctail"
              loading="lazy"
            />
          </picture>
          {/* </ImgWrapper> */}
          <Container>
            <Text>You haven't added any favorite cocktails yet</Text>
          </Container>
        </div>
      </CommonContainer>
    </HeroSection>
  );
};
