import { useState } from 'react';
import { useLockBodyScroll } from "@uidotdev/usehooks";
// import { useSelector } from 'react-redux';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './DropDown.styled';

import pencilIcon from '../../../assets/pencil.svg';


export const DropDown = ( { 
  
  handleOpenUserInfoModal,
  handleLogOutModelOpen,
  // handleCloseLogOutModal, 
  // handleCloseUserInfo,
  handleModalClick,
  handleKeyDown
 }
//   {
//   setEditProfileShow,
//   setShowDropDown,
// }
) => {
  useLockBodyScroll();
  const [isChangeProfileOpen, setIsChangeProfileOpen] = useState(false);//eslint-disable-line




  
  // const handleCloseLogOutModal = () => {
  //   console.log("handleCloseLogOutModal");
  //   // setIsChangeProfileOpen(true);
  //   setIsLogOutModelOpen(false);
  //   // setEditProfileShow(false);
  // };

  // const handleModalClick = e => {
  //   console.log("handleModalClick");
  //   if (e.target === e.currentTarget) {
  //     // setShowDropDown(false);
  //     handleCloseUserInfo();
  //     handleCloseLogOutModal();
  //     // setEditProfileShow(false);
  //   }
  //   e.stopPropagation();
  // };

  // const handleKeyDown = e => {
  //   if (e.key === 'Escape') {
  //     handleCloseUserInfo();
  //     handleCloseLogOutModal();
  //   }
  // };

  return (
    <ModalWrapper>
      <ModalContent onClick={handleModalClick} onKeyDown={handleKeyDown}>
        <ChangeProfileButton
          onClick={() => {
            handleOpenUserInfoModal();
          }}
        >
          Edit profile
          <img src={pencilIcon} alt="pencil" width="14" />
        </ChangeProfileButton>
        <LogOutButton onClick={handleLogOutModelOpen}>Log out</LogOutButton>
      </ModalContent>
    </ModalWrapper>
  );
};
