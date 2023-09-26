import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  Button,
  HeaderStyled,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';
import { PagesMenu } from './PagesMenu/PagesMenu';
import { UserLogo } from './UserLogo/UserLogo';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../MobileMenu/TransitionStyles.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <HeaderStyled>
        <HeaderContainer>
          <Navigation>
            <StyledLink to="/">
              <IconWrapper size={'22px'} size768={'28px'} size1440={'28px'}>
                <use href={`${sprite}#icon-logo`} />
              </IconWrapper>
              Drink Master
            </StyledLink>
            <PagesMenu />
            <div>
              <UserLogo />
              <Button onClick={handleToggleMenu}>
                {/* {isOpen ? (
                  <IconWrapper
                    className={isOpen ? 'icon-wrapper active' : 'icon-wrapper'}
                    size={'32px'}
                    size768={'38px'}
                    // visible={isOpen.toString()}
                  >
                    <use href={`${sprite}#icon-x`} />
                  </IconWrapper>
                ) : (
                  <IconWrapper
                    className={isOpen ? 'icon-wrapper' : 'icon-wrapper active'}
                    size={'32px'}
                    size768={'38px'}
                    // visible={true}
                  >
                    <use
                      href={`${sprite}#icon-burger-menu
                      `}
                    />
                  </IconWrapper>
                )} */}

                <IconWrapper
                  className={isOpen ? 'icon-wrapper active' : 'icon-wrapper'}
                  size={'32px'}
                  size768={'38px'}
                >
                  <use
                    href={`${sprite}#${isOpen ? 'icon-x' : 'icon-burger-menu'}`}
                  />
                </IconWrapper>
              </Button>
            </div>
          </Navigation>
        </HeaderContainer>
      </HeaderStyled>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="menu"
        unmountOnExit
        mountOnEnter
      >
        <MobileMenu isOpen={isOpen} onClose={handleMenuClose} />
      </CSSTransition>
    </>
  );
};
