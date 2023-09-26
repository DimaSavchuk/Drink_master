import { ROUTES } from '../../../Routes/Routes';
import { List, StyledNavLink } from './PagesMenu.styled';

export const PagesMenu = () => {
  return (
    <List>
      <li>
        <StyledNavLink to={ROUTES.HOME}>Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={ROUTES.DRINKS}>Drinks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={ROUTES.ADDDRINK}>Add drinks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={ROUTES.MYDRINKS}>My drinks</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={ROUTES.FAVORITE}>Favorites </StyledNavLink>
      </li>
    </List>
  );
};
