import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(10, 10, 17, 0.8);
  backdrop-filter: blur(2px) drop-shadow(4px 4px 10px blue);
`;

export const WrapperForLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
