import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { logoutUser } from '../../../redux/auth/authOperations';
import { clearState } from '../../../redux/auth/authSlice';

import {
  ModalWrapper,
  ModalContent,
  LogOutButton,
  ModalText,
  ButtonWrapper,
} from './LogOut.styled';
import {
  CloseButton,
  StyledUpdatedCloseButton,
} from '../UserProfile/UserProfile.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LogOutModal = ({ onClose, handleModalClick }) => {
  useLockBodyScroll();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then((res) => {
        if (res && res === 204) {
          navigate('/start');
          dispatch(clearState());
        } else {
          toast.error('Something went wrong');
        }
      })
      .then(toast.success('The user log out successfully!'));
    onClose();
  };

  return (
    <ModalWrapper onClick={handleModalClick}>
      <ModalContent className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
          <StyledUpdatedCloseButton width={16} height={16} />
        </CloseButton>
        <ModalText>Are you sure you want to log out?</ModalText>
        <ButtonWrapper>
          <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
          <LogOutButton onClick={onClose}>Cancel</LogOutButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};
