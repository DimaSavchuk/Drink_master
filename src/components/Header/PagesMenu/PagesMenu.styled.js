import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1439px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;

  color: #f3f3f3;
  font-weight: 500;
  line-height: 1.6;

  background-color: transparent;
  border: 1px solid grey;

  border-radius: 40px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: background-color 300ms linear;
  &:hover,
  &:focus {
    background-color: #161f37;
  }

  &.active {
    background-color: #161f37;
  }
`;
