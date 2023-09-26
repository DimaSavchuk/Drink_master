import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }
  @media (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.06;
  }
`;

export const Box = styled.section`
  color: #f3f3f3;
  padding: 80px 20px 80px 20px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    max-width: 770px;
    padding: 140px 32px 140px 32px;
  }
  @media (min-width: 1440px) {
    padding: 140px 100px 140px 100px;
    max-width: 1445px;
  }
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 247px;
    justify-content: space-between;
  }
`;
export const TitleImage = styled.div`
  width: 100%;
  height: 330px;
  max-width: 704px;
  object-fit: cover;
  overflow: hidden;
  background-color: grey;
  border-radius: 8px;
  @media (min-width: 440px) {
    height: 400px;
  }
  @media (min-width: 1440px) {
    width: 400px;
  }
`;

export const TitleAlcohol = styled.p`
  font-size: 12px;
  font-style: normal;
  line-height: 1.16;
  color: rgba(243, 243, 243, 0.5);
  /* color: rgba(22, 31, 55, 0.5); */
  margin-top: 8px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const TitleDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  line-height: 1.25;
  margin-top: 20px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.4;
    max-width: 593px;
  }
`;

export const ButtonAddFavorite = styled.button`
  color: #161f37;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 42px;
  background: #f3f3f3;
  padding: 14px 40px;
  margin-top: 40px;
  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
export const IngredientsTitle = styled.h2`
  color: rgba(243, 243, 243, 0.5);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 80px;
  }
  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`;
export const RecipeTitle = styled.h2`
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
  @media (min-width: 1440px) {
    margin-top: 100px;
  }
`;
export const RecipeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 60px;
    justify-content: space-between;
    margin-top: 60px;
  }
`;
export const RecipeInfo = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
  @media (min-width: 1440px) {
    width: 549px;
  }
`;
export const ImageDiv = styled.div`
  /* width: 100%;  */
  height: 430px;
  max-width: 704px;
  object-fit: cover;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  background-color: grey;
  border-radius: 8px;
  @media (min-width: 768px) {
    width: 704px;
  }
  @media (min-width: 1440px) {
    width: 631px;
    height: 480px;
  }
`;
