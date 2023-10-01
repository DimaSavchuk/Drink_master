import { IconWrapper } from '../Header/Header.styled';
import {
  Backdrop,
  Background,
  Button,
  IconBack,
  Text,
  Wrapper,
} from './Motivation';
import sprite from '../../assets/sprite.svg';
import motiv from '../../assets/motivation/motivation.png';
import motiv2 from '../../assets/motivation/motivation2.png';
import { useLockBodyScroll } from '@uidotdev/usehooks';

export const Motivation = () => {
  useLockBodyScroll();
  return (
    <Backdrop>
      <Background background={motiv2}>
        <Wrapper>
          <IconBack>
            <use href={`${sprite}#icon-motiv-vector`} />
          </IconBack>
          <Text>Wow! You have added the first recipe to your favorites!</Text>
          <Button>
            <IconWrapper size={28} size768={28} size1440={28}>
              <use href={`${sprite}#icon-close-motiv`} />
            </IconWrapper>
          </Button>
        </Wrapper>
      </Background>
    </Backdrop>
  );
};
