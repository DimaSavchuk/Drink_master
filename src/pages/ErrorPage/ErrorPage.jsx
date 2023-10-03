import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import {
  Container,
  ErrorLetterL,
  ErrorLetterR,
  ErrorImg,
} from './ErrorPage.styled';

import asrBlueIced from '../../assets/hero/asr_blue_iced_tea_mobile 1.png';
import asrBlueIced2x from '../../assets/hero/asr_blue_iced_tea_mobile@2x.png';

const ErrorPage = () => {
  return (
    <Container>
      <CommonContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ErrorLetterL>4</ErrorLetterL>
          <picture>
            <ErrorImg
              src={asrBlueIced}
              srcSet={`${asrBlueIced2x} 2x`}
              alt="coctail"
              loading="lazy"
            />
          </picture>
          <ErrorLetterR>4</ErrorLetterR>
        </div>
      </CommonContainer>
    </Container>
  );
};

export default ErrorPage;
