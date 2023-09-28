import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  display: inline-block;
  padding: 14px 40px;
  border-radius: 42px;
  background-color: #f3f3f3;
  background-color: var(--button-color);

  color: var(--button-hover-color);
  border: 1px solid var(--border-link-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  text-align: center;
  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:hover,
  &:focus {
    color: var(--button-color);
    background-color: var(--button-hover-color);
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
