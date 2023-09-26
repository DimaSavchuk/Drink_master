import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  Button,
  HeaderStyled,
  // StyledDesktopThemeSwitcher,
  // StyledFlexDiv,
} from './Header.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { PagesMenu } from './PagesMenu/PagesMenu';
import { UserLogo } from './UserLogo/UserLogo';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../MobileMenu/TransitionStyles.css';
// import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

//drop down
import { DropDown } from '../Modals/DropDown/DropDown';
import { LogOutModel } from '../Modals/LogOut/LogOut';
import { UserInfoModal } from '../Modals/UserProfile/UserProfile';
//drop dowm

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthVisible, setIsAuthVisible] = useState(true);

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

  const openDropDown = () => {
    console.log('openDropDown');
    setIsEditProfileDropDownOpen(true);
  };

  const handleDropDownClose = () => {
    console.log('handleDropDownClose');
    setIsEditProfileDropDownOpen(false);
  };

  const [isLogOutModelOpen, setIsLogOutModelOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const openUserInfoModal = () => {
    console.log('handleOpenUserInfo');

    setIsUserInfoOpen(true);
    handleDropDownClose();

    // setIsChangeProfileOpen(false);
    // setShowDropDown(false);
    // setEditProfileShow(true);
  };

  const openLogOutModal = () => {
    console.log('handleLogOutModel');
    setIsLogOutModelOpen(true);
    handleDropDownClose();
  };

  const handleCloseLogOutModal = () => {
    console.log('handleCloseLogOutModal');
    setIsLogOutModelOpen(false);
  };

  const handleCloseUserInfo = () => {
    console.log('handleCloseUserInfo');
    setIsUserInfoOpen(false);
  };

  const handleModalClick = (e) => {
    console.log('handleModalClick');
    if (e.target === e.currentTarget) {
      // setShowDropDown(false);
      handleCloseUserInfo();
      handleCloseLogOutModal();
      // setEditProfileShow(false);
    }
    e.stopPropagation();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseUserInfo();
      handleCloseLogOutModal();
    }
  };

  //drop down

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

              {/* <StyledFlexDiv>
              <StyledDesktopThemeSwitcher>
                <ThemeSwitcher />
              </StyledDesktopThemeSwitcher> */}

              <UserLogo onClick={openDropDown} />
              {isEditProfileDropDownOpen && (
                <DropDown
                  handleOpenUserInfoModal={openUserInfoModal}
                  handleLogOutModelOpen={openLogOutModal}
                  handleModalClick={handleModalClick}
                  handleKeyDown={handleKeyDown}
                />
              )}
              {isLogOutModelOpen && (
                <LogOutModel
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

              {/* {isAuthVisible ? <UserLogo /> : null} */}

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
              {/* </StyledFlexDiv> */}
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
