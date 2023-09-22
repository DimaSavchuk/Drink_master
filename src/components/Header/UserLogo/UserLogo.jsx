// import { Button, UserLogoImg, UserLogoWrapper } from './UserLogo.styled';

// export const UserLogo = () => {
//   return (
//     <Button>
//       <UserLogoWrapper>
//         <UserLogoImg src="src/assets/userlogo@2x.png" />
//       </UserLogoWrapper>
//       Victoria
//     </Button>
//   );
// };

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser, selectUserArray } from '../../../redux/store';
import {
  NameStyled,
  UserAvatar,
  UserAvatarWrp,
  UserLogoWrp,
} from './UserLogo.styled';
import { DropDown } from '../../Modals/DropDown/DropDown';

export const UserLogo = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [editProfileShown, setEditProfileShown] = useState(false);
  // const user = useSelector(selectUser);
  const user = useSelector(selectUserArray);

  return (
    <UserLogoWrp onClick={() => setShowDropDown(!showDropDown)}>
      <UserAvatarWrp>
        <UserAvatar
          src={user?.avatarURL || require('src/assets/userlogo@2x.png" /')}
          alt="avatar"
        />
      </UserAvatarWrp>
      <NameStyled>{user?.name || 'no Name'}</NameStyled>
      {(showDropDown || editProfileShown) && (
        <DropDown setEditProfileShown={setEditProfileShown} />
      )}
    </UserLogoWrp>
  );};