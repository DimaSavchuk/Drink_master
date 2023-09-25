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
                {!isOpen ? (
                  <IconWrapper
                    size={'32px'}
                    size768={'38px'}
                    // visible={isOpen.toString()}
                  >
                    <use href={`${sprite}#icon-burger-menu`} />
                  </IconWrapper>
                ) : (
                  <IconWrapper
                    size={'32px'}
                    size768={'38px'}
                    // visible={isOpen.toString()}
                  >
                    <use href={`${sprite}#icon-x`} />
                  </IconWrapper>
                )}
              </Button>
            </div>
          </Navigation>
        </HeaderContainer>
      </HeaderStyled>
      {isOpen && <MobileMenu isOpen={isOpen} />}
    </>
  );
};
