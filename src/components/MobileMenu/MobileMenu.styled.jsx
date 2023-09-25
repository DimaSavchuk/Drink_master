import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// export const MenuWrapper = styled.div`
//   position: fixed;
//   width: 100vw;
//   /* height: ${({ visible }) => (visible ? '100vh' : '0')}; */
//   height: 100vh;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   z-index: 2;
//   background-color: #0a0a11;
//   /* visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')}; */
//   /* transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.5)')}; */
//   /* opacity: ${({ visible }) => (visible ? 1 : 0)}; */

//   /* transition: all 1000ms linear; */
//   overflow: hidden;
//   /* pointer-events: none; */
//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

export const MobileContainer = styled.div`
  padding: 232px 20px 200px;
  height: 100%;
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
