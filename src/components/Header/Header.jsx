import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  Button,
  HeaderStyled,
} from './Header.styled';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';
import { PagesMenu } from './PagesMenu/PagesMenu';
import { UserLogo } from './UserLogo/UserLogo';
import { DropDown } from '../Modals/DropDown/DropDown';
import { LogOutModel } from '../Modals/LogOut/LogOut';
import { UserInfoModal } from '../Modals/UserProfile/UserProfile';

export const Header = () => {

  const [isEditProfileDropDownOpen, setIsEditProfileDropDownOpen] = useState(false);

  const openDropDown = () => {
    console.log("openDropDown");
    setIsEditProfileDropDownOpen(true);
  };

  const handleDropDownClose = () => {
    console.log("handleDropDownClose");
    setIsEditProfileDropDownOpen(false);
  };

  const [isLogOutModelOpen, setIsLogOutModelOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  
  const openUserInfoModal = () => {
    console.log("handleOpenUserInfo");

    setIsUserInfoOpen(true);
    handleDropDownClose();

    // setIsChangeProfileOpen(false);
    // setShowDropDown(false);
    // setEditProfileShow(true);
  };

  
  const openLogOutModal = () => {
    console.log("handleLogOutModel");
    setIsLogOutModelOpen(true);
    handleDropDownClose();
  };

  const handleCloseLogOutModal = () => {
    console.log("handleCloseLogOutModal");
    setIsLogOutModelOpen(false);
  };

  const handleCloseUserInfo = () => {
    console.log("handleCloseUserInfo");
    setIsUserInfoOpen(false);
  };

  const handleModalClick = e => {
    console.log("handleModalClick");
    if (e.target === e.currentTarget) {
      // setShowDropDown(false);
      handleCloseUserInfo();
      handleCloseLogOutModal();
      // setEditProfileShow(false);
    }
    e.stopPropagation();
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      handleCloseUserInfo();
      handleCloseLogOutModal();
    }
  };


  return (
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
            <UserLogo onClick={openDropDown}/>
            {isEditProfileDropDownOpen && <DropDown handleOpenUserInfoModal={openUserInfoModal}
                                                    handleLogOutModelOpen={openLogOutModal}
                                                    handleModalClick={handleModalClick}
                                                    handleKeyDown={handleKeyDown}/>}
            {isLogOutModelOpen && <LogOutModel onClose={handleCloseLogOutModal}
                                               handleModalClick={handleModalClick}
                                               handleKeyDown={handleKeyDown} />}
            {isUserInfoOpen && <UserInfoModal onClose={handleCloseUserInfo}
                                              handleModalClick={handleModalClick}
                                              handleKeyDown={handleKeyDown} />}
            <Button>
              <IconWrapper size={'32px'} size768={'38px'}>
                <use href={`${sprite}#icon-burger-menu`} />
              </IconWrapper>
            </Button>
          </div>
        </Navigation>
      </HeaderContainer>
    </HeaderStyled>
  );
};
