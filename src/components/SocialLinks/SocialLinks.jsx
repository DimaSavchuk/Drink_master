import { IconWrapper } from '../Header/Header.styled';
import { SocialLink, SocialList } from './SocialLinks.styled';
import sprite from '../../assets/sprite.svg';

const SocialLinks = () => (
  <SocialList>
    <li>
      <SocialLink target="_blank" href="https://www.facebook.com/goITclub/">
        <IconWrapper size={'22px'} size768={'28px'} fill={'#f3f3f3'}>
          <use href={`${sprite}#icon-facebook`} />
        </IconWrapper>
      </SocialLink>
    </li>
    <li>
      <SocialLink target="_blank" href="https://www.instagram.com/goitclub/">
        <IconWrapper size={'22px'} size768={'28px'} fill={'#f3f3f3'}>
          <use href={`${sprite}#icon-instagram`} />
        </IconWrapper>
      </SocialLink>
    </li>
    <li>
      <SocialLink target="_blank" href="https://www.youtube.com/c/GoIT">
        <IconWrapper size={'22px'} size768={'28px'} fill={'#f3f3f3'}>
          <use href={`${sprite}#icon-youtube`} />
        </IconWrapper>
      </SocialLink>
    </li>
  </SocialList>
);

export default SocialLinks;
