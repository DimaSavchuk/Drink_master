import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import { Container, Gradient } from './ErrorPage.styled';

import asrBlueIced from '../../assets/hero/asr_blue_iced_tea_mobile 1.png';
import asrBlueIced2x from '../../assets/hero/asr_blue_iced_tea_mobile@2x.png';

const ErrorPage = () => {
  return (
    <Container>
      <Gradient />
      <CommonContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#363535', fontSize: 150, fontWeight: 600 }}>
            4
          </span>
          <picture>
            <img
              style={{ margin: '0 auto' }}
              src={asrBlueIced}
              srcSet={`${asrBlueIced2x} 2x`}
              alt="coctail"
              loading="lazy"
            />
          </picture>
          <span style={{ color: '#363535', fontSize: 150, fontWeight: 600 }}>
            4
          </span>
        </div>
      </CommonContainer>
    </Container>
  );
};

export default ErrorPage;
