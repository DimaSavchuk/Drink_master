import styled from '@emotion/styled';
import { Field } from 'formik';

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 31px;
  }

  input:focus + label {
    color: transparent;
  }
`;

export const FieldStyled = styled(Field)`
  height: 34px;

  text-align: center;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;
    outline: transparent;
  }

  &::placeholder {
    opacity: 0;
  }
`;

export const FieldSelectStyled = styled(Field)`
  height: 34px;
  padding-bottom: 14px;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;
    outline: transparent;
  }

  &::after {
    padding-bottom: 14px;
  }
`;

export const LabelStyled = styled.label`
  color: #f3f3f3;
  opacity: 50%;

  position: absolute;
  top: 0;
  left: 0;

  & + input:focus {
    position: static;
  }
`;
