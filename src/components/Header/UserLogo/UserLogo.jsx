import { useSelector } from 'react-redux';
import { Button, UserLogoImg, UserLogoWrapper } from './UserLogo.styled';
import { selectUserName } from '../../../redux/auth/authSelectors';
import userLogo from '../../../assets/userlogo@2x.png';
export const UserLogo = ({ onClick }) => {
  const name = useSelector(selectUserName);
  return (
    <Button onClick={onClick}>
      <UserLogoWrapper>
        <UserLogoImg src={userLogo} />
      </UserLogoWrapper>
      {name}
    </Button>
  );
};
