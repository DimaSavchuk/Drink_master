import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  Button,
  HeaderStyled,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';
import { PagesMenu } from './PagesMenu/PagesMenu';
import { UserLogo } from './UserLogo/UserLogo';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/">
            <IconWrapper
              size={'22px'}
              marginRight={'8px'}
              size768={'28px'}
              size1440={'28px'}
            >
              <use href={`${sprite}#icon-logo`} />
            </IconWrapper>
            Drink Master
          </StyledLink>
          <PagesMenu />
          <div>
            <UserLogo />
            <Button>
              <IconWrapper size={'32px'} size768={'38px'}>
                <use href={`${sprite}#icon-burger-menu`} />
              </IconWrapper>
            </Button>
          </div>
        </Navigation>
      </HeaderContainer>
    </HeaderStyled>
  );
};
