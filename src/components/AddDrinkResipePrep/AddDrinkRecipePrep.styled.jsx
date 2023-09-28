import { Field } from 'formik';
import { styled } from 'styled-components';

export const FieldTextArea = styled(Field)`
  /* display: block; */
  width: 100%;
  height: 184px;
  padding: 16px 18px;

  color: #f3f3f3;

  background-color: transparent;
  border: 1px solid #f3f3f380;
  border-radius: 14px;
  outline: transparent;

  overflow: auto;

  transition:
    100ms ease transform,
    250ms ease opacity;

  &:focus {
    border: 1px solid #fff;
  }

  &::placeholder {
    color: #f3f3f380;
    opacity: 1;
  }

  &:focus::placeholder {
    opacity: 0;
  }

  &:focus ~ label {
    transform: translateY(-44px);
    opacity: 1;
  }

  &::-webkit-resizer {
    display: none;
  }

  @media (min-width: 768px) {
    width: 480px;
  }
`;

export const LabelTextArea = styled.label`
  position: absolute;
  left: 20px;
  top: 18px;
  opacity: 0;

  color: #f3f3f380;

  transition: 200ms ease transform 100ms;
`;

export const FieldWrapper = styled.div`
  position: relative;
  overflow: visible;

  margin-bottom: 20px;

  h3 {
    margin-bottom: 40px;
  }
`;

export const ErrorText = styled.div`
  margin-top: 4px;
  padding-left: 8px;

  display: block;

  font-size: 12px;
  font-weight: 400;
  line-height: calc(14 / 12);
  color: #da1414;
  text-align: left;
`;
