import sprite from '../../assets/sprite.svg';
import { ArrowWrapper } from './SelectOpenArrow.styled';

export const SelectOpenArrowBlack = ({ isOpen }) => {
  return (
    <ArrowWrapper open={isOpen}>
      <use href={`${sprite}#icon-chevron-down-black`} />
    </ArrowWrapper>
  );
};
