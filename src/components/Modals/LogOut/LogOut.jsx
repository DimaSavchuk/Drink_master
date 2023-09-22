

// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
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
// import { clearState } from '../../../redux/UserInfo/userInfoSlice';

export const LogOutModel = ({ onClose }) => {
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
    Notiflix.Notify.success('The user log out successfully!');
    console.log('The user log out successfully!');
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
