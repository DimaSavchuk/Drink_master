import { useEffect, useState } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../redux/UserInfo/userSelectors';
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
  //  EditIcon,
} from './UserProfile.styled';

import { updateUserThunk } from '../../../redux/UserInfo/userOperations';
//  import { FiEdit2 } from 'react-icons/fi';
import AddIcon from '../../../assets/add_photo.svg';
import defaultAvatarURL from '../../../assets/user.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserInfoModal = ({ onClose, handleModalClick }) => {
  useLockBodyScroll();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [imgURL, setImageURL] = useState('');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.modal-content')) {
        onClose(); // first time close (if modal in update user form)
        onClose(); // second time close if user is on logout + edit selection
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    setSelectedAvatar(file);
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setImageURL(reader.result);
    });
    reader.readAsDataURL(file);
  };

  const handleOnSubmit = async (values) => {
    dispatch(updateUserThunk({ name: values.name, avatarURL: selectedAvatar }))
      .unwrap()
      .then((res) => {
        if (res && res.code === 200) {
          toast.success('The user saved successfuly!');
          onClose();
        } else {
          toast.error('The user not saved!');
        }
      });
  };

  let avatar;
  if (imgURL) {
    avatar = imgURL;
  } else if (user.avatarURL) {
    avatar = user.avatarURL;
  } else {
    avatar = defaultAvatarURL;
  }

  return (
    <ModalWrapper onClick={handleModalClick}>
      <ContentWrapper className="modal-content">
        <CloseButton onClick={onClose} tabIndex={1} className="close-button">
          <StyledUpdatedCloseButton width={16} height={16} />
        </CloseButton>
        <StyledForm
          initialValues={{
            avatarURL: user.avatarURL || '',
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
                    name="file"
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
                {/* <EditIcon>
                    <FiEdit2 size={14} />
                </EditIcon> */}
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
              <SaveChangeButton type="submit">Save changes</SaveChangeButton>
            </StyledFormInsight>
          )}
        </StyledForm>
      </ContentWrapper>
    </ModalWrapper>
  );
};
