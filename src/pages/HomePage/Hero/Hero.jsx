import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import {
  AddDrinkLink,
  Gradient,
  HeroSection,
  ImgWrapper,
  Text,
  Title,
  Wrapper,
  ContentWrapper,
  GradientRight,
  GradientCenter,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Gradient
        translateX={-399}
        translateY={-100}
        translateXtablet={-623}
        translateYtablet={-185}
        translateXdesktop={-623}
        translateYdesktop={-200}
      />
      <CommonContainer position={'relative'}>
        <GradientRight
          translateX={300}
          translateY={300}
          translateXtablet={600}
          translateYtablet={250}
          translateXdesktop={1000}
          translateYdesktop={200}
        />
        <GradientCenter translateX={800} translateY={200} />
        <Wrapper>
          <ContentWrapper>
            <Title>Craft Your Perfect Drink with Drink Master</Title>
            <Text>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world's
              finest beverages.
            </Text>
            <AddDrinkLink>Add drink</AddDrinkLink>
          </ContentWrapper>
          {/* <ImgWrapper> */}
          <picture style={{ position: 'relative' }}>
            <source
              media="(min-width: 1280px)"
              srcSet="src/assets/hero/asr_blue_iced_tea_tablet.png 1x, src/assets/hero/asr_blue_iced_tea_tablet@2x.png 2x"
            />
            <source
              media="(min-width: 768px)"
              srcSet="src/assets/hero/asr_blue_iced_tea_tablet.png 1x, src/assets/hero/asr_blue_iced_tea_tablet@2x.png 2x"
            />
            <img
              style={{ margin: '0 auto' }}
              src="src/assets/hero/asr_blue_iced_tea_mobile 1.png"
              srcSet="src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x,src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
              alt="coctail"
              loading="lazy"
            />
          </picture>
          {/* </ImgWrapper> */}
        </Wrapper>
      </CommonContainer>
    </HeroSection>
  );
};
