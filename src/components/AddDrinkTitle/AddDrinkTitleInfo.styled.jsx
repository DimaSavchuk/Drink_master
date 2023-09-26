import styled from '@emotion/styled';
import { Field } from 'formik';

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-18px);
  }
`;

export const FieldStyled = styled(Field)`
  height: 34px;

  text-align: right;
  color: #f3f3f3;

  border-style: none;
  border-bottom: 1px solid #f3f3f380;
  background: transparent;

  &:focus {
    border-bottom: 1px solid #f3f3f3;
    outline: transparent;
  }

  /* &:focus ~ label {
    color: red;
  } */

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
  color: #f3f3f380;

  position: absolute;
  top: 0;
  left: 0;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }

  &:focus > label {
    color: red;
  }
`;

export const FieldRadioLabel = styled.label`
  margin-left: 4px;
  color: #f3f3f380;

  &:first-of-type {
    margin-right: 14px;
  }
`;

export const FieldRadio = styled(Field)`
  display: flex;
  justify-content: center;
  align-items: center;

  appearance: none;
  margin: 0;

  font: inherit;
  color: currentColor;
  width: 16px;
  height: 16px;
  border: 1.5px solid #f3f3f380;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    border: 1.5px solid #fff;
  }

  label {
    color: #fff;
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background-color: #fff;
  }

  &:checked::before {
    transform: scale(1);
  }
`;

export const RadioButtonsWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
  }

  input:checked ~ label {
    color: #fff;
  }
`;
