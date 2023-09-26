import styled from 'styled-components';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

import { CiCalendar } from 'react-icons/ci';

import {
  AiOutlineExclamationCircle,
  AiOutlineCheckCircle,
} from 'react-icons/ai';
import { FiEye, FiEyeOff } from 'react-icons/fi';

export const Eye = styled(FiEye)`
  stroke: white;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
export const EyeOff = styled(FiEyeOff)`
  stroke: white;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const DatePickerContainer = styled.div`
  input {
    display: block;
    
  }

  .success {
    outline: 1px solid green;
  }

  .fail {
    outline: 1px solid red;
  }

  .unfilled {
    outline: 1px solid gray;
  }
`;

export const Checked = styled(AiOutlineCheckCircle)`
  fill: #3cbc81;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;
export const Exclamation = styled(AiOutlineExclamationCircle)`
  fill: #da1414;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 335px;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LastLabel = styled(Label)`
  margin-bottom: 28px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const FieldWrapper = styled.div`
  position: relative;
`;
export const FormField = styled(FormikField)`
border: none;
  width: 100%;
  padding: 18px 24px;

  border-radius: 200px;
  color: #f3f3f3;
  background-color: transparent;
  font-size: 14px;
  line-height: 1.28;

  transition: color 300ms linear;

  &::placeholder {
    color: rgba(243, 243, 243, 0.5);
  }

  @media (min-width: 768px) {
    padding: 14px 24px;
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    width: 400px;
  }
`;

export const Calendar = styled(CiCalendar)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  fill: #f3f3f3;
  cursor: pointer;
`;

export const DateFieldWrapper = styled.div`
  position: relative;
`;

export const CorrectText = styled.span`
  color: #3cbc81;
  padding-top: 8px;
  padding-left: 25px;
  font-size: 12px;
`;

export const ErrorMessage = styled(FormikError)`
  padding-top: 8px;
  color: #da1414;
  padding-left: 25px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 18px;
  background-color: transparent;
  color: #f3f3f3;
  border: 1px solid rgba(243, 243, 243, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  border-radius: 42px;

  transition:
    color 300ms linear,
    background-color 300ms linear;

  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }
`;
