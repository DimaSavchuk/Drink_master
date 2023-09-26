import styled from '@emotion/styled';

export const CustomSelect = styled.button`
  width: 100%;
  height: 34px;
  padding-bottom: 14px;
  padding-left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

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

  span {
    display: block;
  }
`;

export const Label = styled.span`
  color: #f3f3f380;
`;

export const DropMenu = styled.div`
  max-height: 300px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f3f3f380;
    border-radius: 4px;
  }
  /* &::-webkit-scrollbar-track {
    background-color: yellow;
  } */

  position: absolute;
  top: 24px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: calc(16 / 12);
  color: #f3f3f380;

  border-radius: 12px;
  background-color: #161f37;
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: #f3f3f3;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 31px;
  }
`;
