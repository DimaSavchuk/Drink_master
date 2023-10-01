import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  Button,
  HeaderStyled,
  StyledDesktopThemeSwitcher,
  StyledFlexDiv,
} from './Header.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { PagesMenu } from './PagesMenu/PagesMenu';
import { UserLogo } from './UserLogo/UserLogo';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../MobileMenu/TransitionStyles.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

//drop down
import { DropDown } from '../Modals/DropDown/DropDown';
import { LogOutModal } from '../Modals/LogOut/LogOut';
import { UserInfoModal } from '../Modals/UserProfile/UserProfile';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/authSelectors';
//drop dowm

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthVisible, setIsAuthVisible] = useState(true);
  const name = useSelector(selectUserName);
  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen === true) {
      setIsAuthVisible(true);
    } else {
      setIsAuthVisible(false);
    }
    isOpen ? enableBodyScroll(document) : disableBodyScroll(document);
  };

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  //drop down
  
  const [isEditProfileDropDownOpen, setIsEditProfileDropDownOpen] =
    useState(false);
    const [isDropDownOpen, setDropDownOpen] = useState(false);

  const openDropDown = () => {
    setIsEditProfileDropDownOpen(true);
  };

  const handleDropDownClose = () => {
    setIsEditProfileDropDownOpen(false);
    setDropDownOpen(false);
  };
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const openUserInfoModal = () => {
    setIsUserInfoOpen(true);
    handleDropDownClose();
  };

  const openLogOutModal = () => {
    setIsLogOutModalOpen(true);
    handleDropDownClose();
  };

  const handleCloseLogOutModal = () => {
    setIsLogOutModalOpen(false);
  };

  const handleCloseUserInfo = () => {
    setIsUserInfoOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseUserInfo();
      handleCloseLogOutModal();
      handleDropDownClose();
    }
    e.stopPropagation();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseUserInfo();
      handleCloseLogOutModal();
      handleDropDownClose();
    }
  };

  //drop down

  return (
    <>
      <HeaderStyled>
        <HeaderContainer onKeyDown={handleKeyDown}>
          <Navigation>
            <StyledLink to="/">
              <IconWrapper size={'22px'} size768={'28px'} size1440={'28px'}>
                <use href={`${sprite}#icon-logo-light`} />
              </IconWrapper>
              Drink Master
            </StyledLink>
            <PagesMenu />

            <StyledFlexDiv>
              <StyledDesktopThemeSwitcher>
                <ThemeSwitcher />
              </StyledDesktopThemeSwitcher>
              {!isOpen ? <UserLogo onClick={openDropDown} /> : null}

              {isEditProfileDropDownOpen && (
                <DropDown
                  handleOpenUserInfoModal={openUserInfoModal}
                  handleLogOutModalOpen={openLogOutModal}
                  handleModalClick={handleModalClick}
                  onClose={handleDropDownClose}
                />
              )}
              {isLogOutModalOpen && (
                <LogOutModal
                  onClose={handleCloseLogOutModal}
                  handleModalClick={handleModalClick}
                  handleKeyDown={handleKeyDown}
                />
              )}
              {isUserInfoOpen && (
                <UserInfoModal
                  onClose={handleCloseUserInfo}
                  handleModalClick={handleModalClick}
                  handleKeyDown={handleKeyDown}
                />
              )}

              {isOpen && <ThemeSwitcher />}

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
                {/* 
                <IconWrapper
                  className={isOpen ? 'icon-wrapper active' : 'icon-wrapper'}
                  size={'32px'}
                  size768={'38px'}
                >
                  <use
                    href={`${sprite}#${isOpen ? 'icon-x' : 'icon-burger-menu'}`}
                  />
                </IconWrapper> */}
                <IconWrapper
                  className={isOpen ? 'icon-wrapper active' : 'icon-wrapper'}
                  size={'32px'}
                  size768={'38px'}
                >
                  <use
                    href={`${sprite}#${isOpen ? 'icon-cross' : 'icon-menu'}`}
                  />
                </IconWrapper>
              </Button>
            </StyledFlexDiv>
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
