import { IconWrapper } from '../Header/Header.styled';
import { Background } from './Motivation';
import sprite from '../../assets/sprite.svg';

export const Motivation = () => {
  return (
    <Background>
      <svg style={{ marginTop: 218 }}>
        <use href={`${sprite}#icon-motiv-vector`} />
      </svg>
    </Background>
  );
};
