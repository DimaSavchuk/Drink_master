
// import { ModalOverlay, ModalContent, Title, ButtonContainer, Button } from './LogOut.styled';

// const LogoutModal = ({ isOpen, onClose, onLogout }) => {
//     if (!isOpen) return null;

//     return (
// <ModalOverlay>
// <ModalContent>
// <btn><svg><use></use></svg></btn>
// <Title>Are you sure you want to logout?</Title>
// <ButtonContainer>
// <Button onClick={onLogout}>Logout</Button>
// <Button onClick={onClose}>Cancel</Button>
// </ButtonContainer>
// </ModalContent>
// </ModalOverlay>
// );
// };

// export default LogoutModal;

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { LogOut } from '../../../../authOperations';
import {
  ModalWrapper,
  ModalContent,
  LogOutButton,
  CloseButton,
  ModalText,
  ButtonWrapper,
} from './LogOut.styled';
import Notiflix from 'notiflix';
import XIcon from 'src/assets/x.png';
import { clearState } from '../../../redux/UserInfo/userInfoSlice';

export const LogOutModel = ({ id, onClose }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleDelete = () => {
    // dispatch(LogOut())
    //     .unwrap()
    //     .then(res => {
    //     // console.log('Response:', res);
    //     if (res && res.status === 200) {
    //     navigate('/');
    //     dispatch(clearState());
    //     }
    // })
    // .then(Notiflix.Notify.success('The user log out successfully!'));
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={XIcon} alt="Close" width={24} />
        </CloseButton>
        <ModalText>Are you sure you want to log out?</ModalText>
        <ButtonWrapper>
          <LogOutButton onClick={handleDelete}>Log out</LogOutButton>
          <LogOutButton onClick={onClose}>Cancel</LogOutButton>
        </ButtonWrapper>
      </ModalContent>
      `
    </ModalWrapper>
  );
};
