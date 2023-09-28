import styled from 'styled-components';

export const PreviewSection = styled.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 40px;
  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    row-gap: 80px;
    margin-bottom: 80px;
  }
`;

export const CategoryName = styled.h3`
  color: var(--text-color);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    font-size: 40;
    line-height: 1.1;
  }
`;

export const CocktailsWrap = styled.ul`
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-top: 40px;
  }
`;

export const BtnsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
