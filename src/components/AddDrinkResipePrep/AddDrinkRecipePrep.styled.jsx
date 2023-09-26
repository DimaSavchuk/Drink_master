import { Field } from 'formik';
import { styled } from 'styled-components';

export const FieldTextArea = styled(Field)`
  display: block;
  width: 100%;
  height: 184px;
  padding: 16px 18px;

  color: #f3f3f380;

  background-color: transparent;
  border: 1px solid #f3f3f380;
  border-radius: 14px;
  outline: transparent;
  overflow: visible;

  &:focus {
    border: 1px solid #fff;
  }

  &::placeholder {
    overflow: visible;
    color: #f3f3f380;
  }

  &:focus::placeholder {
    position: absolute;
    top: -40px;

    z-index: 999;
  }

  &::-webkit-resizer {
    display: none;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`;
