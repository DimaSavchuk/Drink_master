import styled from 'styled-components';

export const CommonContainer = styled.div`
  position: ${({ position }) => position || 'static'};
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    max-width: 768px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
    max-width: 1440px;
  }
`;
