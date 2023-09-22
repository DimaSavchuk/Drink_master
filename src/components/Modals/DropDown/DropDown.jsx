// ЦЕ НЕ МОДАЛЬНЕ ВІКНО, А ВИПАДАЮЧИЙ ЕЛЕМЕНТ ЯКИЙ МИ БАЧИМО КОЛИ НАТИСКАЄМО НА ЮЗЕРА
import { useState } from 'react';
import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './DropDown.styled';

import pencilIcon from 'src/assets/pencilIcon.png';
import { LogOutModel } from '../LogOut/LogOut';
import UserProfile from '../UserProfile/UserProfile';

export const DropDown = () => {
  const [isChangeProfileOpen, setIsChangeProfileOpen] = useState(false);
  const [isConfirmLogoutOpen, setIsConfirmLogoutOpen] = useState(false);
  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  const handleOpenUserInfo = () => {
    setIsChangeProfileOpen(false);
    setIsUserInfoOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsChangeProfileOpen(false);
    setIsConfirmLogoutOpen(true);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsChangeProfileOpen(false);
      setIsConfirmLogoutOpen(false);
      setIsUserInfoOpen(false);
    }
    e.stopPropagation();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsChangeProfileOpen(false);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent onClick={handleModalClick} onKeyDown={handleKeyDown}>
        <ChangeProfileButton
          onClick={() => {
            handleOpenUserInfo();
          }}
        >
          Edit profile
          <img src={pencilIcon} alt="pencil" width="14" />
        </ChangeProfileButton>
        <LogOutButton onClick={handleConfirmLogout}>Log out</LogOutButton>
      </ModalContent>

      {isConfirmLogoutOpen && <LogOutModel onClose={handleConfirmLogout} />}
      {isUserInfoOpen && <UserProfile onClose={handleOpenUserInfo} />}
    </ModalWrapper>
  );
};
