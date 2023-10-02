import { TfiPlus, TfiReload } from 'react-icons/tfi';
import {
  AddFileButton,
  BackgroundImg,
  Button,
  Icon,
  InputWrapper,
} from './AddImageInput.styled';
import { useState } from 'react';

const AddImageInput = ({ setValue }) => {
  const [imgUrl, setImgUrl] = useState('');

  const onChangeFileInput = (e) => {
    const imgObj = e.currentTarget.files[0] ?? null;
    const imgSrc = imgObj ? URL.createObjectURL(imgObj) : null;

    if (imgSrc) {
      setImgUrl(imgSrc);
      setValue('file', imgObj);
    }
  };

  return (
    <InputWrapper>
      <input
        type="file"
        name="file"
        id="add-file"
        onChange={onChangeFileInput}
        accept="image/*"
      />
      <AddFileButton>
        <label htmlFor="add-file">
          {imgUrl && (
            <BackgroundImg>
              <img id="uploaded-file" src={imgUrl} />
            </BackgroundImg>
          )}
          <Button>
            <Icon>
              {imgUrl ? <TfiReload size={16} /> : <TfiPlus size={16} />}
            </Icon>
            {imgUrl ? 'Update file' : 'Add image'}
          </Button>
        </label>
      </AddFileButton>
    </InputWrapper>
  );
};
export default AddImageInput;
