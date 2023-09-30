import styled from 'styled-components';
import { Field } from 'formik';

export const IngridientsWrapper = styled.div`
  margin-bottom: 80px;
`;

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

  border: 1px solid var(--see-more-link-color);
  border-radius: 200px;

  button {
    display: flex;
    align-items: center;
    padding: 0;
    font-size: 16px;
    border: none;
    background: transparent;
    color: var(--see-more-link-color);
  }

  button:hover,
  button:active {
    color: var(--text-color);
  }

  span {
    width: 20px;
    margin-left: 10px;
    margin-right: 10px;

    font-size: 14px;
    line-height: calc(18 / 14);
    text-align: center;
    color: var(--text-color);
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 18px;

  select,
  input {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 18px;
    padding-right: 36px;
    margin-right: 8px;

    background: transparent;
    border: 1px solid var(--see-more-link-color);
    border-radius: 200px;

    font-size: 14px;
    line-height: calc(18 / 14);
    font-weight: 400;
    color: var(--text-color);

    &:focus {
      border: 1px solid var(--text-color);
      outline: none;
    }
  }

  select {
    width: 200px;
    appearance: none;
    cursor: pointer;
  }

  input {
    width: 100px;
  }

  button {
    display: block;
    padding: 0;
    border: none;
    background: none;
    color: var(--see-more-link-color);
  }

  button:hover,
  button:active {
    color: var(--text-color);
  }
`;

export const FieldSelect = styled.div`
  position: relative;

  span {
    /* content: ''; */
    display: block;
    position: absolute;
    pointer-events: none;
    top: 16px;
    right: 24px;
    color: var(--text-color);
    /* clip-path: polygon(100% 0%, 0 0%, 50% 100%); */
  }

  option {
    background-color: var(--button-hover-color);
    color: var(--see-more-link-color);
  }
`;
