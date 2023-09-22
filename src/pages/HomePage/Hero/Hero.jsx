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
      {/* <Gradient
        translatex={-399}
        translatey={-100}
        translatextablet={-623}
        translateytablet={-185}
        translatexdesktop={-623}
        translateydesktop={-200}
      /> */}
      <CommonContainer>
        {/* <GradientRight
          translatex={300}
          translatey={300}
          translatextablet={600}
          translatextablet={250}
          translatexdesktop={1000}
          translateydesktop={200}
        /> */}
        {/* <GradientCenter translatex={800} translatey={200} /> */}
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
        </Wrapper>
      </CommonContainer>
    </HeroSection>
  );
};
