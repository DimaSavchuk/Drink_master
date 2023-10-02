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
import motiv2 from '../../assets/motivation/motivation2.png';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useSelector } from 'react-redux';
import { selectFirstRecipe } from '../../redux/motivation/motivationSelects';
import { useEffect, useState } from 'react';

export const Motivation = ({ isShown }) => {
  const [isOpen, setIsOpen] = useState(isShown);
  useEffect(() => {
    const wasMotivationShown = localStorage.getItem('wasMotivationShown');
    if (wasMotivationShown === 'true') {
      setIsOpen(false);
    } else {
      setIsOpen(isShown);
    }
  }, [isShown]);

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  const handleCloseMotivationModal = () => {
    setIsOpen(false);
    localStorage.setItem('wasMotivationShown', 'true');
  };
  return isOpen ? (
    <Backdrop>
      <Background background={motiv2}>
        <Wrapper>
          <IconBack>
            <use href={`${sprite}#icon-motiv-vector`} />
          </IconBack>
          <Text>Wow! You have added the first recipe to your drinks!</Text>
          <Button onClick={handleCloseMotivationModal}>
            <IconWrapper size={28} size768={28} size1440={28}>
              <use href={`${sprite}#icon-close-motiv`} />
            </IconWrapper>
          </Button>
        </Wrapper>
      </Background>
    </Backdrop>
  ) : null;
};
