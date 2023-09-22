import styled from '@emotion/styled';
import { Field } from 'formik';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 34px;
`;

export const FieldCounter = styled.div`
  /* width: 104px; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #f3f3f380;
  border-radius: 200px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 16px;
    border: none;
    background: transparent;
    color: #f3f3f380;
  }

  button:hover,
  button:active {
    color: #f3f3f3;
  }

  span {
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 14px;
    line-height: calc(18 / 14);
    text-align: center;
    color: #f3f3f3;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 18px;

  select {
    width: 200px;
  }

  input {
    width: 100px;
  }

  button {
    display: block;
    padding: 0;
    border: none;
    background: none;
    color: #f3f3f380;
  }

  button:hover,
  button:active {
    color: #f3f3f3;
  }
`;

export const FieldStyled = styled(Field)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;
  margin-right: 8px;

  background: transparent;
  border: 1px solid #f3f3f380;
  border-radius: 200px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: #f3f3f3;

  &:focus {
    border: 1px solid #f3f3f3;
    outline: none;
  }
`;
