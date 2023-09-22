import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-row-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(335px, 1fr));
    grid-gap: 20px;
    grid-row-gap: 80px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(335px, 1fr));
  }
`;

export const Card = styled.div`
  /* flex: 1; */
`;

export const DrinkTitle = styled.h2`
  margin-bottom: 4px;

  color: #f3f3f3;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.18;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1280px) {
  }
`;

export const DrinkStat = styled.p`
  margin-bottom: 24px;

  color: #f3f3f3;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.18;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
  }
`;

export const DrinkDesc = styled.p`
  margin-bottom: 24px;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.18;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
  }
`;

export const SeeMoreLink = styled(NavLink)`
  margin-bottom: 40px;
  margin-right: 8px;

  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 42px;
  background: #161f37;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
`;

export const DeleteCardBtn = styled.button`
  width: 56px;
  height: 54px;
  border-radius: 50%;
  border: none;
  background: #161f37;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  margin: 0 5px;
  color: rgba(243, 243, 243, 0.3);
`;

export const PaginationNumber = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  margin: 0 5px;
  color: #f3f3f3;
  ${(props) =>
    props.active &&
    `padding: 5px 10px;
    border-radius: 50%;
    background-color: rgba(64, 112, 205, 0.5);
    `}
`;
