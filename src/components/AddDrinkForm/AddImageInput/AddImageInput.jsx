import { TfiPlus, TfiReload } from 'react-icons/tfi';
import {
  AddFileButton,
  BackgroundImg,
  Button,
  Icon,
  InputWrapper,
} from './AddImageInput.styled';
import { useState } from 'react';
import { ErrorText } from '../AddImageInput/AddImageInput.styled';
import { useField } from 'formik';
import { useEffect } from 'react';

const AddImageInput = ({ setValue }) => {
  const [fileUrl, setFileUrl] = useState('');

  const [field, meta] = useField('file');

  const onChangeFileInput = (e) => {
    const imgObj = e.currentTarget.files[0] ?? null;
    const linkToFile = imgObj ? URL.createObjectURL(imgObj) : null;

    if (linkToFile) {
      setFileUrl(linkToFile);
      setValue('file', imgObj);
    }
  };

  useEffect(() => {
  
    if (field.value === null) {
      setFileUrl('');
      return;
    }
  }, [field]);

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
          {fileUrl && (
            <BackgroundImg>
              <img id="uploaded-file" src={fileUrl} />
            </BackgroundImg>
          )}
          <Button>
            <Icon>
              {fileUrl ? <TfiReload size={16} /> : <TfiPlus size={16} />}
            </Icon>
            {fileUrl ? 'Update file' : 'Add image'}
          </Button>
        </label>
      </AddFileButton>
      {meta.touched && meta.error ? <ErrorText>{meta.error}</ErrorText> : null}
    </InputWrapper>
  );
};
export default AddImageInput;
