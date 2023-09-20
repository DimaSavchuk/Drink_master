import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1279px) {
    display: none;
  }
  display: 'flex';
  align-items: 'center';
  gap: 16;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  color: #f3f3f3;
  background-color: transparent;
  border: 1px solid grey;

  &.active {
    background-color: #161f37;
  }
`;
