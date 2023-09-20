import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const CardContainer = styled.div`
    outline: 1px red solid;
    background-color: #0A0A11;;
    width: 335px;

    @media (min-width: 768px) {
        width:342px;
    }
    @media (min-width: 1280px) {
        width:400px;
    }
`;

export const Image = styled.img`  
    width: 335px;
    height: 360px;
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 342px;
    }
    @media (min-width: 1280px) {
        width: 400px;
        height: 400px;
    }
`;

export const CocktailInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
`;

export const CocktailName = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
    color: #f3f3f3;

    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.33;
    }
`;

export const StyledCocktailLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29; 
    color: rgba(243, 243, 243, 0.50);

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 1.12;
    }
`;