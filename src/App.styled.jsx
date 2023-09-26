import styled from 'styled-components';

import ellipseLeftFooter from './assets/footer/ellipseleft-footer.png';
import ellipseRightFooter from './assets/footer/ellipseright-footer.png';
import bgEllipseLeft from './assets/bg/bg-ellipse-left.png';
import bgEllipseRight from './assets/bg/br-ellipse-right.png';

export const AppWrapper = styled.div`
  width: 100%;
  background-image: url(${ellipseLeftFooter}), url(${ellipseRightFooter});
  background-repeat: no-repeat;
  background-position:
    60% 137%,
    20% 145%;

  /* background-position:
    80% 420%,
    30% 700%; */

  @media (min-width: 768px) {
    background-position:
      70% 132%,
      30% 138%;
  }

  @media (min-width: 1440px) {
    background-position:
      -28% 134%,
      60% 139%;
  }
  @media (min-width: 1600px) {
    background-position:
      0% 134%,
      60% 139%;
  }
  @media (min-width: 1800px) {
    background-position:
      20% 134%,
      60% 139%;
  }
  @media (min-width: 2000px) {
    background-position:
      30% 134%,
      60% 139%;
  }
  /* 
  background-image: url(${bgEllipseLeft}), url(${bgEllipseRight});
  background-repeat: no-repeat;
  background-position:
    -45vw -10px,
    70vw 260px; 

; */
`;
