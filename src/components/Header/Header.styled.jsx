import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 1px solid var(--border-link-color);
  position: absolute;
  z-index: 100;
  width: 100%;
`;
export const HeaderContainer = styled.div`
  padding: 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 84px;
    max-width: 768px;
    padding: 20px 32px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 100px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;

  color: var(--link-color);
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;

  @media (min-width: 768px) {
    gap: 14px;

    font-size: 18px;
    line-height: 1.222;
  }

  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
  }
`;

export const StyledFlexDiv = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  @media (min-width: 768px) {
    gap: 24px;
  }
  @media (min-width: 1440px) {
    gap: 28px;
  }
`;

export const StyledDesktopThemeSwitcher = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
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

  @media (min-width: 1440px) {
    display: none;
  }
`;

// export const NavigationDesktop = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  fill: ${(props) => props.color || 'var(--link-color)'};
  stroke: var(--link-color);
  margin-right: ${(props) => props.marginRight || '0'};
  margin-left: ${(props) => props.marginLeft || '0'};
  /* opacity: ${({ visible }) => (visible ? '1' : '0' || '1')}; */

  display: inline-block;

  @media (min-width: 768px) {
    width: ${(props) => props.size768 || '20px'};
    height: ${(props) => props.size768 || '20px'};
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.size1440 || '30px'};
    height: ${(props) => props.size1440 || '30px'};
  }
`;

export const IconLightWrapper = styled.svg`
  width: ${(props) => props.size || '12px'};
  height: ${(props) => props.size || '12px'};
  margin-right: ${(props) => props.marginRight || '0'};
  margin-left: ${(props) => props.marginLeft || '0'};
  /* opacity: ${({ visible }) => (visible ? '1' : '0' || '1')}; */

  display: inline-block;

  @media (min-width: 768px) {
    width: ${(props) => props.size768 || '20px'};
    height: ${(props) => props.size768 || '20px'};
  }

  @media (min-width: 1440px) {
    width: ${(props) => props.size1440 || '30px'};
    height: ${(props) => props.size1440 || '30px'};
  }
`;
