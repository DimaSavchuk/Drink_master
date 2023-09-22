import { List, StyledNavLink } from './PagesMenu.styled';

export const PagesMenu = () => {
  return (
    <List>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/drinks">Drinks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/alldrinks">All drinks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/mydrinks">My drinks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/favorites">Favorites </StyledNavLink>
      </li>
    </List>
  );
  
};

