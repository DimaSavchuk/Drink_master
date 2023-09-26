import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUserArray } from '../../../redux/selectors';
import * as Yup from 'yup';
import {
  ModalWrapper,
  CloseButton,
  UserAvatarWrapper,
  ContentWrapper,
  AvatarFrame,
  StyledFormInsight,
  StyledForm,
  SaveChangeButton,
  StyledInput,
  StyledInputWrap,
  StyledIconChecked,
  StyledIconError,
  AddIconImg,
  StyledInputFile,
  StyledUpdatedCloseButton,
  StyledError,
  StyledMessage,
} from './UserProfile.styled';

// import { updateUserThunk } from '../../../redux/UserInfo/userOperations';
import AddIcon from 'src/assets/add_photo.png';
import defaultAvatarURL from '../../../assets/user.png';

// const defaultAvatarURL = require('../../../assets/user.png');

export const UserInfoModal = ({ onClose, handleModalClick, handleKeyDown }) => {
  // const dispatch = useDispatch();
  // const user = useSelector(selectUserArray);
  
  const user = {
    name: 'Victoria',
    avatarURL:
      'https://res.cloudinary.com/dgooxm96o/image/upload/v1695311635/avatars/woddyy.jpg.jpg',
  };
  const [isOpen, setIsOpen] = useState(true); //eslint-disable-line
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgURL, setImageURL] = useState('');


  // useEffect(() => {
  //   const handleOutsideClick = event => {
  //   if (!event.target.closest('.modal-content')) {
  //       onClose(); // first time close (if modal in update user form)
  //       onClose(); // second time close if user is on logout + edit selection
  //   }
  // };
  //   window.addEventListener('mousedown', handleOutsideClick);
  //   return () => {
  //     window.removeEventListener('mousedown', handleOutsideClick);
  //   };
  // }, [onClose]);

  const handleAvatarChange = async e => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageURL(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const handleOnSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    if (selectedAvatar) {
      formData.append('avatarURL', selectedAvatar);
    }
    //TODO: Update User onServer
    // const res = await dispatch(updateUserThunk(formData));
    // if (res.meta.requestStatus === 'fulfilled') {
    //   onClose();
    // }
    user.name = values.name;
    Notiflix.Notify.success('The user saved successfuly!');
    onClose();
  };

  let avatar;
  if (imgURL) {
    avatar = imgURL;
  } else if (user.avatarURL) {
    avatar = user.avatarURL;
  } else {
    avatar = defaultAvatarURL;
  }

  return isOpen ? (
    <ModalWrapper onClick={handleModalClick} onKeyDown={handleKeyDown}>
      <ContentWrapper className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
        <StyledUpdatedCloseButton width={24} height={24} />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: '',
            name: user.name || '',
          }}
          validationSchema={Yup.object({
            avatarURL: Yup.string(),
            name: Yup.string()
            .min(2)
            .matches(
              /^[a-zA-Zа-яєїієґҐА-ЯЄЇІЄҐҐ'0-9]+$/,
              'Name can only contain letters or numbers.',
            ),
          })}
          onSubmit={handleOnSubmit}
        >
          {({ errors, touched, handleChange, setFieldTouched }) => (
            <StyledFormInsight>
              <UserAvatarWrapper>
                <AvatarFrame src={avatar} alt="avatar" width={100} />
                <label htmlFor="avatarInput">
                  <AddIconImg src={AddIcon} alt="plus" width={28} />
                  <StyledInputFile
                    type="file"
                    id="avatarInput"
                    accept="image/*"
                    onChange={handleAvatarChange}
                  />
                </label>
              </UserAvatarWrapper>
              <StyledInputWrap>
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={(e) => {
                    setFieldTouched('name');
                    handleChange(e);
                  }}
                  className={
                    touched.name && !errors.name
                      ? 'valid-border'
                      : errors.name && touched.name
                      ? 'invalid-border'
                      : ''
                  }
                />
                {errors.name && touched.name && (
                  <div>
                    <StyledIconError color="red" />{' '}
                    <StyledError name="name" component="div" />
                  </div>
                )}
                {touched.name && !errors.name && (
                  <div>
                    <StyledIconChecked color="green" />{' '}
                    <StyledMessage>This is an CORRECT name</StyledMessage>
                  </div>
                )}
              </StyledInputWrap>
              <SaveChangeButton type="submit" >Save changes</SaveChangeButton>
            </StyledFormInsight>
          )}
        </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  ) : null;
};


