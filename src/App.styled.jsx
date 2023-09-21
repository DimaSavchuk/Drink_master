import styled from '@emotion/styled';
import example from './assets/example.png';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('src/assets/footer/ellipseleft-footer.png');
  background-repeat: no-repeat;
  background-position: 0px 0px;
  /* -140vw 145vh,
    5vw 140vh; */

  @media (min-width: 768px) {
    /* background-position:
      -35vw 162vh,
      -5vw 172vh; */

    /* background-position: 47% -310%, 20% -265%; */
  }

  @media (min-width: 1440px) {
    /* 5vw 86vh,
      15vw 86vh; */

    /* background-position: 47% -310%, 20% -265%; */
  }
`;
