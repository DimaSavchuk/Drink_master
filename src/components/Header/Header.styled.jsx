import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #0a0a11;
  background-color: lightblue;
`;
export const HeaderContainer = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 20px 32px;
  }

  @media (min-width: 1280px) {
    padding: 20px 100px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16;
  font-weight: 600;
  color: #ffffff; /* White text color */
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
  }
`;
export const Button = styled.button`
  background-color: transparent;
  border: none;
  line-height: 0;
  padding: 0;
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
  }

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const NavigationDekstop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || '#ffffff'};
  margin-right: ${(props) => props.marginRight || '0'};
  display: inline-block;
`;
