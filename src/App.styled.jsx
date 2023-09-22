import styled from '@emotion/styled';
import example from './assets/example.png';

export const AppWrapper = styled.div`
  width: 100%;
  background-image: url('src/assets/footer/ellipseleft-footer.png'),
    url('src/assets/footer/ellipseright-footer.png');
  background-repeat: no-repeat;
  background-position:
    80% 420%,
    30% 700%;
  @media (min-width: 768px) {
    background-position:
      60% 300%,
      40% 400%;
  }

  @media (min-width: 1440px) {
    background-position:
      25% 4000%,
      100% -1350%;
  }
`;
