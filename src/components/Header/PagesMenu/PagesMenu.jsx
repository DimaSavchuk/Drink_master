import { Container, StyledNavLink } from './PagesMenu.styled';

export const PagesMenu = () => {
  return (
    <Container>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/drinks">Drinks</StyledNavLink>
      <StyledNavLink to="/alldrinks">All drinks</StyledNavLink>
      <StyledNavLink to="/mydrinks">My drinks</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites </StyledNavLink>
    </Container>
  );
};
