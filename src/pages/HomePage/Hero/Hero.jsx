import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import {
  AddDrinkLink,
  Gradient,
  HeroSection,
  ImgWrapper,
  Text,
  Title,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroSection>
      <Gradient />
      <CommonContainer>
        <div>
          <div>
            <Title>Craft Your Perfect Drink with Drink Master</Title>
            <Text>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world's
              finest beverages.
            </Text>
            <AddDrinkLink>Add drink</AddDrinkLink>
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
        </div>
      </CommonContainer>
    </HeroSection>
  );
};
