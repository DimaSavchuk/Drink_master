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
  padding: 80px 20px 80px 20px;
  @media (min-width: 768px) {
    padding: 140px 32px 140px 32px;
  }
  @media (min-width: 1440px) {
    padding: 140px 100px 140px 100px;
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
  height: 400px;
  @media (min-width: 1440px) {
    width: 400px;
  }
  object-fit: cover;
  overflow: hidden;
  background-color: grey;
  border-radius: 8px;
`;

export const TitleAlcohol = styled.p`
  font-size: 12px;
  font-style: normal;
  line-height: 1.16;
  color: rgba(22, 31, 55, 0.5);
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
    line-height: 1.37;
    max-width: 593px;
  }
`;

export const ButtonFavorite = styled.button``;
