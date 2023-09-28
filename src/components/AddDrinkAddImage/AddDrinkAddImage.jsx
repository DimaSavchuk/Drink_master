import { TfiPlus } from 'react-icons/tfi';
import {
  AddFileButton,
  BackgroundImg,
  Button,
  Icon,
  InputWrapper,
} from './AddDrinkAddImage.styled';
import { useState } from 'react';

const AddDrinkAddImage = ({ setValue }) => {
  const [imgUrl, setImgUrl] = useState('');

  const onChangeFileInput = (e) => {
    const imgObj = e.currentTarget.files[0] ?? null;
    const imgSrc = imgObj ? URL.createObjectURL(imgObj) : setImgUrl(null);

    imgSrc ? setImgUrl(imgSrc) : setImgUrl(null);
    imgSrc ? setValue('file', imgObj) : setValue('file', null);

    console.log(imgObj);
    console.log(imgSrc);
  };

  return (
    <InputWrapper>
      <input
        type="file"
        name="file"
        id="add-file"
        onChange={onChangeFileInput}
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
              <TfiPlus size={16} />
            </Icon>
            {imgUrl ? 'Update' : 'Add image'}
          </Button>
        </label>
      </AddFileButton>
    </InputWrapper>
  );
};
export default AddDrinkAddImage;
