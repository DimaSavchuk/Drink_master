import styled from 'styled-components';

import ellipseLeftFooter from './assets/footer/ellipseleft-footer.png';
import ellipseRightFooter from './assets/footer/ellipseright-footer.png';

import background380 from './assets/bg/background380.png';
import background550 from './assets/bg/background550.png';
import background850 from './assets/bg/background850.png';

// background-image: url(${background380});
// background-repeat: no-repeat;
// background-position: 100% 100px;

export const AppWrapper = styled.div`
  width: 100%;
  background-image: url(${ellipseLeftFooter}), url(${ellipseRightFooter}),
    url(${background550}), url(${background550});
  background-repeat: no-repeat;
  background-position:
    60% 137%,
    20% 145%,
    100% -5%,
    -20% 20%;

  @media (min-width: 768px) {
    background-image: url(${ellipseLeftFooter}), url(${ellipseRightFooter}),
      url(${background850}), url(${background550});
    background-position:
      70% 132%,
      30% 138%,
      200% -150px,
      -300% 270px;
  }

  @media (min-width: 1440px) {
    background-image: url(${ellipseLeftFooter}), url(${ellipseRightFooter}),
      url(${background850}), url(${background550}), url(${background380});
    background-position:
      -28% 134%,
      60% 139%,
      -350% -150px,
      210% 270px,
      100% 250px;
  }
  @media (min-width: 1600px) {
    background-position:
      0% 134%,
      60% 139%,
      -220% -150px,
      210% 270px,
      100% 250px;
  }
  @media (min-width: 1800px) {
    background-position:
      20% 134%,
      60% 139%,
      -140% -150px,
      160% 270px,
      85% 250px;
  }
  @media (min-width: 2000px) {
    background-position:
      30% 134%,
      60% 139%,
      -120% -150px,
      160% 270px,
      85% 250px;
  }
`;
