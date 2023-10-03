import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ellipseMobileBlue from '../../assets/mobile-menu/ellipse-mobile-blue.png';
import ellipseMobileYellow from '../../assets/mobile-menu/ellipse-mobile-yellow.png';
import ellipseMobileRightBottom from '../../assets/mobile-menu/ellipseright-bottom-mobile.png';

import ellipseTabletBlue from '../../assets/mobile-menu/ellipse-blue-tablet.png';
import ellipseTabletYellow from '../../assets/mobile-menu/ellipse-yellow-tablet.png';

export const MenuWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  background-color: var(--background-color);
  overflow: hidden;

  background-image: url(${ellipseMobileBlue}), url(${ellipseMobileYellow}),
    url(${ellipseMobileRightBottom});
  background-position:
    110% 90%,
    60% -130px,
    -15% -170%;
  background-size: auto;
  background-repeat: no-repeat;
  @media (min-width: 475px) {
    background-image: url(${ellipseMobileBlue}), url(${ellipseMobileYellow}),
      url(${ellipseMobileRightBottom});
    background-position:
      140% 90%,
      70% -130px,
      -40% -170%;
  }
  @media (min-width: 575px) {
    background-image: url(${ellipseMobileBlue}), url(${ellipseMobileYellow}),
      url(${ellipseMobileRightBottom});
    background-position:
      170% 90%,
      120% -130px,
      -80% -170%;
  }
  @media (min-width: 675px) {
    background-image: url(${ellipseMobileBlue}), url(${ellipseMobileYellow}),
      url(${ellipseMobileRightBottom});
    background-position:
      220% 90%,
      160% -130px,
      -120% -170%;
  }
  @media (min-width: 720px) {
    background-image: url(${ellipseMobileBlue}), url(${ellipseMobileYellow}),
      url(${ellipseMobileRightBottom});
    background-position:
      270% 90%,
      -300% -130px,
      -160% -170%;
  }
  @media (min-width: 768px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -400px -65px,
      450px 300px;
  }
  @media (min-width: 900px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -450px -65px,
      500px 300px;
  }
  @media (min-width: 1000px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -450px -65px,
      600px 300px;
  }
  @media (min-width: 1100px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -450px -65px,
      700px 300px;
  }
  @media (min-width: 1200px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -450px -65px,
      800px 300px;
  }
  @media (min-width: 1300px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -450px -65px,
      900px 300px;
  }
  @media (min-width: 1400px) {
    background-image: url(${ellipseTabletYellow}), url(${ellipseTabletBlue});
    background-position:
      -450px -65px,
      1000px 300px;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const MobileContainer = styled.div`
  padding: 232px 20px 200px;
  height: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    padding: 340px 20px 200px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
  }
`;

export const Item = styled.li`
  border-radius: 40px;
  border: 1px solid var(--border-link-color);
`;
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  color: var(--link-color);
  font-weight: 500;
  line-height: 1.6;

  background-color: transparent;
  width: 100%;
  border-radius: 40px;
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #161f37;
    color: #f3f3f3;
  }
`;
