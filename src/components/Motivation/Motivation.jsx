import styled from 'styled-components';
import motiv from '../../assets/motivation/motivation.png';

export const Background = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 30px;
  background:
    linear-gradient(0deg, rgba(10, 10, 17, 0.4) 0%, rgba(10, 10, 17, 0.4) 100%),
    url(${motiv}),
    lightgray -82.157px -396.532px / 143.003% 184.878% no-repeat;
`;
