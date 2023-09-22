import { Button, UserLogoImg, UserLogoWrapper } from './UserLogo.styled';

export const UserLogo = () => {
  return (
    <Button>
      <UserLogoWrapper>
        <UserLogoImg src="src/assets/userlogo@2x.png" />
      </UserLogoWrapper>
      Victoria
    </Button>
  );
};
