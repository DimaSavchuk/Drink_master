import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import {
  AddDrinkLink,
  HeroSection,
  Text,
  Title,
  Wrapper,
  ContentWrapper,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <CommonContainer>
        <Wrapper>
          <ContentWrapper>
            <Title>Craft Your Perfect Drink with Drink Master</Title>
            <Text>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world's
              finest beverages.
            </Text>
            <AddDrinkLink to="/adddrink">Add drink</AddDrinkLink>
          </ContentWrapper>
          {/* <ImgWrapper> */}
          <picture>
            <img
              style={({ margin: '0 auto' }, { width: 360 })}
              src="./src/assets/hero/asr_blue_iced_tea_mobile 1.png"
              srcSet="./src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x, ./src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
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
