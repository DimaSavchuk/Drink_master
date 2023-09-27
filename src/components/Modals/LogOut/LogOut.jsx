// import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { logoutThunk } from '../../../../authOperation';
import {
  ModalWrapper,
  ModalContent,
  LogOutButton,
  // CloseButton,
  ModalText,
  ButtonWrapper,
} from './LogOut.styled';
import { CloseButton, StyledUpdatedCloseButton } from '../UserProfile/UserProfile.styled'
import Notiflix from 'notiflix';
// import XIcon from 'src/assets/x.png';
// import { clearState } from '../../../redux/UserInfo/userInfoSlice';

export const LogOutModel = ({ onClose, handleModalClick, handleKeyDown }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // TODO: Hanlde LogOut Call to server
    // dispatch(logoutThunk())
    //     .unwrap()
    //     .then(res => {
    //      console.log('Response:', res);
    //     if (res && res.status === 200) {
    //     navigate('/');
    //     dispatch(clearState());
    //     }
    // })
    // .then(Notiflix.Notify.success('The user log out successfully!'));
    Notiflix.Notify.success('The user log out successfully!');
    console.log('The user log out successfully!');
    navigate('/start');
    onClose();
    // TODO: Redirect to welcome page. 
  };

  return (
    <ModalWrapper onClick={handleModalClick} onKeyDown={handleKeyDown}>
      <ModalContent>
      <CloseButton onClick={onClose} tabIndex={1} className="close-button">
        <StyledUpdatedCloseButton width={16} height={16} />
        </CloseButton>
        <ModalText>Are you sure you want to log out?</ModalText>
        <ButtonWrapper>
          <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
          <LogOutButton onClick={onClose}>Cancel</LogOutButton>
        </ButtonWrapper>
      </ModalContent>
      `
    </ModalWrapper>
  );
};
