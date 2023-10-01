import {
  ChangeProfileButton,
  LogOutButton,
  ModalContent,
  ModalWrapper,
} from './DropDown.styled';
import { FiEdit2 } from 'react-icons/fi';

export const DropDown = (
  {
    handleOpenUserInfoModal,
    handleLogOutModalOpen,
    handleModalClick,
    onClose,
  }) => {
  return (
    <ModalWrapper onClick={handleModalClick} onClose={onClose}>
      <ModalContent className="modal-content">
        <ChangeProfileButton
          onClick={() => {
            handleOpenUserInfoModal();
          }}
        >
          Edit profile
          <FiEdit2 size={14} />
        </ChangeProfileButton>
        <LogOutButton onClick={handleLogOutModalOpen}>Log out</LogOutButton>
      </ModalContent>
    </ModalWrapper>
  );
};
