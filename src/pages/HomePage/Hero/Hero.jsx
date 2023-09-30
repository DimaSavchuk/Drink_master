import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import {
  AddDrinkLink,
  HeroSection,
  Text,
  Title,
  Wrapper,
  ContentWrapper,
  Image,
} from './Hero.styled';

import asrBlueIced from '../../../assets/hero/asr_blue_iced_tea_mobile 1.png';
import asrBlueIced2x from '../../../assets/hero/asr_blue_iced_tea_mobile@2x.png';

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
            <Image
              src={asrBlueIced}
              srcSet={`${asrBlueIced2x} 2x`}
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
