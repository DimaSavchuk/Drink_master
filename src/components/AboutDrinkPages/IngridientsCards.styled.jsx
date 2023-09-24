import styled from 'styled-components';

export const IngredientsDiv = styled.ul`
display: flex;
gap: 22px;
flex-wrap: wrap;
margin-top: 42px;
list-style: none;
@media (min-width: 768px) {
    margin-top: 24px;
    gap: 35px;
  }
  
`;

export const IngredientFoto = styled.div`
width: 157px;
height: 157px;
border-radius: 8px;
background: rgba(22, 31, 55, 0.50);
object-fit: cover;
overflow: hidden;
@media (min-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;
export const InfoDiv = styled.div`
margin-top: 8px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
@media (min-width: 768px) {
    margin-top: 14px;   
  }
`;
export const TitleIngridient = styled.p`
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.3; 
@media (min-width: 768px) {
    font-size: 18px;
  }
`;
export const Measure = styled.p`
color: rgba(243, 243, 243, 0.50);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 1.3;
@media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;