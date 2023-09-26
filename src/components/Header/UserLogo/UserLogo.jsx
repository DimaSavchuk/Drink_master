import { Button, UserLogoImg, UserLogoWrapper } from './UserLogo.styled';

export const UserLogo = ({ onClick }) => {

  return (
    <Button onClick={onClick}>
      <UserLogoWrapper>
        <UserLogoImg src="src/assets/userlogo@2x.png" />
      </UserLogoWrapper>
      Victoria
    </Button>
  );
};
