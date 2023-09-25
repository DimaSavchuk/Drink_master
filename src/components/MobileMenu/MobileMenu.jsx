import { NavLink } from 'react-router-dom';
import {
  Item,
  List,
  //   MenuWrapper,
  MobileContainer,
  StyledNavLink,
} from './MobileMenu.styled';

import './TransitionStyles.css';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useRef } from 'react';

export const MobileMenu = ({ isOpen }) => {
  console.log(isOpen);
  //   const nodeRef = useRef(null);
  return (
    <CSSTransition
      onEnter={() => console.log('Enter')}
      onExit={() => console.log('Exit')}
      in={isOpen}
      timeout={500}
      classNames="menu"
      //   nodeRef={nodeRef}
      //   unmountOnExit
      //   mountOnEnter
    >
      <div className="wrapper">
        <MobileContainer>
          <List>
            <Item>
              <StyledNavLink>Home</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink>Drinks</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink>Add drink</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink>My drinks</StyledNavLink>
            </Item>
            <Item>
              <StyledNavLink>Favorites</StyledNavLink>
            </Item>
          </List>
        </MobileContainer>
      </div>
    </CSSTransition>
  );
};
