import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ellipseMobileBlue from '../../assets/mobile-menu/ellipse-mobile-blue.png';
import ellipseMobileYellow from '../../assets/mobile-menu/ellipse-mobile-yellow.png';
import ellipseMobileRightBottom from '../../assets/mobile-menu/ellipseright-bottom-mobile.png';
export const MenuWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: #0a0a11;
  overflow: hidden;
  /* pointer-events: none; */

  background-image: url(${ellipseMobileBlue}), url(${ellipseMobileYellow}),
    url(${ellipseMobileRightBottom});
  background-position:
    110% 90%,
    60% -130px,
    -15% -100%;
  background-size: auto;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  padding: 232px 20px 200px;
  height: 100%;
  overflow: auto;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
`;
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  color: #f3f3f3;
  font-weight: 500;
  line-height: 1.6;

  background-color: transparent;
  width: 100%;
  border-radius: 40px;
  /* border: 1px solid rgba(243, 243, 243, 0.2);  */
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #161f37;
  }

  /* &.active {
    background-color: #161f37;
  } */
`;
