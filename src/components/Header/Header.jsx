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

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Navigation>
          <StyledLink to="/">
            <IconWrapper size={'22px'} marginRight={'8px'}>
              <use href={`${sprite}#icon-logo`} />
            </IconWrapper>
            Drink Master
          </StyledLink>
          <PagesMenu />
          <Button>
            <IconWrapper size={'32px'}>
              <use href={`${sprite}#icon-burger-menu`} />
            </IconWrapper>
          </Button>
        </Navigation>
      </HeaderContainer>
    </HeaderStyled>
  );
};
