import { CommonContainer } from '../../components/GlobalStyles/CommonContainer.styled';
import { Container, Gradient } from './ErrorPage.styled';

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
              style={{ margin: '0' }}
              src="./src/assets/hero/asr_blue_iced_tea_mobile 1.png"
              srcSet="./src/assets/hero/asr_blue_iced_tea_mobile 1.png 1x, ./src/assets/hero/asr_blue_iced_tea_mobile@2x.png 2x"
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
