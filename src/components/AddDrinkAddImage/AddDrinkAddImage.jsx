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
  const [buttonText, setButtonText] = useState('');

  return (
    <InputWrapper>
      <input
        type="file"
        name="file"
        id="add-file"
        onChange={(e) => {
          console.log(e.currentTarget.files);

          const imgSrc = URL.createObjectURL(e.currentTarget.files[0]);
          console.log(imgSrc);

          if (e.currentTarget.files[0]) {
            setImgUrl(imgSrc);
            // document.getElementById('uploaded-file').src =
            //   window.URL.createObjectURL(e.currentTarget.files[0]);
            setValue('file', e.currentTarget.files[0]);
            console.log(imgSrc[1]);
          }
        }}
      />
      <AddFileButton>
        <label htmlFor="add-file">
          <BackgroundImg>
            {imgUrl && <img id="uploaded-file" src={imgUrl} />}
          </BackgroundImg>
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
