import {
  Item,
  List,
  MenuWrapper,
  MobileContainer,
  StyledNavLink,
} from './MobileMenu.styled';

import './TransitionStyles.css';
import { ROUTES } from '../../Routes/Routes';
export const MobileMenu = ({ isOpen, onClose }) => {
  
  return (
    <MenuWrapper>
      <MobileContainer>
        <List>
          <Item>
            <StyledNavLink to={ROUTES.HOME} onClick={onClose}>
              Home
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={ROUTES.DRINKS} onClick={onClose}>
              Drinks
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={ROUTES.ADDDRINK} onClick={onClose}>
              Add drink
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={ROUTES.MYDRINKS} onClick={onClose}>
              My drinks
            </StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to={ROUTES.FAVORITE} onClick={onClose}>
              Favorites
            </StyledNavLink>
          </Item>
        </List>
      </MobileContainer>
    </MenuWrapper>
    // </CSSTransition>
  );
};
