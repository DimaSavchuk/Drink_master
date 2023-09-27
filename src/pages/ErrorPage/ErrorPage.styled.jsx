import styled from '@emotion/styled';
 

export const Container = styled.section`
  padding-top: 200px;
  padding-bottom: 112px;
  background-color: var(--background-color);
`;

export const ErrorLetterL = styled.span`
  color: var(--error-color);
  font-size: 120px;
  font-weight: 600;
  margin-right: -15px;
  @media (min-width: 748px) {
    font-size: 150px;
    margin-right: -15px;
  }
  @media (min-width: 1440px) {
    font-size: 200px;
  }
`;

export const ErrorImg = styled.img`
  margin: 0;
  width: 117px;
  @media (min-width: 748px) {
    width: 158px;
  }
`;

export const ErrorLetterR = styled.span`
  color: var(--error-color);
  font-size: 120px;
  font-weight: 600;
  margin-left: -20px;
  @media (min-width: 748px) {
    font-size: 150px;
    margin-left: -25px;
  }
  @media (min-width: 1440px) {
    font-size: 200px;
  }
`;

// export const Gradient = styled.div`
//   position: absolute;
//   transform: translate(-80%, -60%);
//   width: 520px;
//   height: 550px;
//   flex-shrink: 0;

//   border-radius: 550px;
//   background: rgba(64, 112, 205, 0.5);
//   filter: blur(104.8543701171875px);
// `;