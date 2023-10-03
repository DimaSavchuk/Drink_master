import { IconWrapper } from '../Header/Header.styled';
import {
  Backdrop,
  Background,
  Button,
  IconBack,
  Text,
  Wrapper,
} from './Motivation.styled';
import sprite from '../../assets/sprite.svg';
import motiv from '../../assets/motivation/motivation.png';
// import motivSecond from '../../assets/motivation/motivation2.png';
import { useEffect } from 'react';

export const Motivation = ({
  isShown,
  text = 'Wow! You have added the first recipe to your drinks!',
  onClose,
  image,
}) => {
  useEffect(() => {
    if (isShown === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isShown]);

  return (
    <Backdrop>
      <Background background={image}>
        <Wrapper>
          <IconBack>
            <use href={`${sprite}#icon-motiv-vector`} />
          </IconBack>
          <Text>{text}</Text>
          <Button onClick={onClose}>
            <IconWrapper size={28} size768={28} size1440={28}>
              <use href={`${sprite}#icon-close-motiv`} />
            </IconWrapper>
          </Button>
        </Wrapper>
      </Background>
    </Backdrop>
  );
};
