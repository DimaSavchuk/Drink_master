import styled from '@emotion/styled';

import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 14px;
  width: 335px;

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

export const FormField = styled(FormikField)`
  padding: 18px 24px;
  outline: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 200px;
  color: rgba(243, 243, 243, 0.5);
  background-color: transparent;
  font-size: 14px;
  line-height: 1.28;
  border: none;
  transition: 200ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:focus-visible {
    outline: 1px solid rgba(243, 243, 243, 0.5);
  }
  &:hover {
    color: #f3f3f3;
  }

  @media (min-width: 768px) {
    padding: 14px 24px;
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
    width: 352px;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: #f3f3f3;
  padding-left: 25px;
  font-size: 12px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 18px;
  background-color: #f3f3f3;
  color: #161f37;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  border-radius: 42px;
  border: none;

  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12;
  }

`;
