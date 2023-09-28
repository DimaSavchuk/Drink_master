import styled from '@emotion/styled';
import { Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 80px;

  @media (min-width: 768px) {
    flex-direction: row;
    & > div:not(:last-of-type) {
      margin-right: 32px;
    }
  }
  /* 
  input:focus + label,
  input:focus:not(:placeholder-shown) + label {
    transform: translateY(-18px);
  }

  input:focus + label {
    color: yellow;
  } */
`;

export const ContentWrapper = styled.div`
  width: 100%;

  & > div:nth-last-of-type(2) {
    margin-bottom: 40px;
  }
`;

export const FieldStyled = styled(Field)`
  display: block;
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

  &:focus ~ label {
    color: #f3f3f3;
  }

  &::placeholder {
    opacity: 0;
  }

  @media (min-width: 768px) {
    height: 41px;
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  top: 0;
  left: 0;

  color: #f3f3f380;
`;

export const FieldWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }

  input:hover label,
  input:focus label {
    color: #f3f3f3;
    transition: 200ms ease transform;
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
  margin: 0;
  width: 16px;
  height: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  font: inherit;
  color: currentColor;

  border: 1.5px solid #f3f3f380;
  border-radius: 50%;

  appearance: none;
  cursor: pointer;

  & + label {
    cursor: pointer;
  }

  &:hover + label {
    color: #f3f3f3;
  }

  &:checked {
    border: 1.5px solid #fff;
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
