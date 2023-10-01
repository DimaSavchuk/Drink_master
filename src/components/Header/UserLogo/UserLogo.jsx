import { useSelector } from 'react-redux';
import { Button, UserLogoImg, UserLogoWrapper, ModalWrap } from './UserLogo.styled';
import { selectUserName, selectAvatarURL  } from '../../../redux/auth/authSelectors';


export const UserLogo = ({ onClick }) => {
  const name = useSelector(selectUserName);
  const avatarURL = useSelector(selectAvatarURL);

  return (
    <ModalWrap onClick={onClick}>
    <Button>
      <UserLogoWrapper>
        <UserLogoImg src={
          avatarURL || 'https://res.cloudinary.com/dgooxm96o/image/upload/v1695311635/avatars/woddyy.jpg.jpg'
        }
        alt="avatar" />
      </UserLogoWrapper>
      {name || 'Name' }
    </Button>
    </ModalWrap>
  );
};
