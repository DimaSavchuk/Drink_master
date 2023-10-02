import styled from '@emotion/styled';

export const CustomSelect = styled.button`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

  font-size: 14px;
  line-height: calc(18 / 14);
  font-weight: 400;
  color: var(--text-color);

  background: transparent;
  border: 1px solid
    ${({ menuOpen }) =>
      menuOpen ? 'var(--text-color)' : 'var(--see-more-link-color)'};
  border-radius: 200px;

  cursor: pointer;

  &:focus,
  &:hover {
    outline: none;
  }

  &:focus span,
  &:hover span {
    color: var(--text-color);
  }

  &::after {
    padding-bottom: 14px;
  }
`;

export const PlaceholderWrap = styled.div`
  display: flex;
  align-items: center;

  color: ${({ selected }) =>
    selected === false ? 'var(--see-more-link-color)' : 'var(--text-color)'};

  span {
    display: block;
  }

  svg {
    margin-left: auto;
  }
`;

// export const Label = styled.span`
//   color: var(--see-more-link-color);
// `;

export const DropMenu = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  transition: 500ms linear color;

  &::-webkit-scrollbar {
    margin-top: 4px;
    width: 4px;
    background-color: transparent;
    height: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--see-more-link-color);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track-piece {
    background: transparent;
    margin-top: 18px;
    margin-bottom: 18px;
    margin-right: 4px;
  }

  position: absolute;
  top: 48px;
  right: 0;
  padding: 10px;

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-radius: 12px;
  background-color: var(--button-hover-color);
  z-index: 10;

  div:not(:last-of-type) {
    margin-bottom: 6px;
  }

  div:hover,
  div:focus {
    color: var(--text-color);
  }
`;

export const SelectWrapper = styled.div`
  margin-right: 8px;
  width: 100%;

  position: relative;

  @media screen and (min-width: 768px) {
    flex-basis: 47%;
    margin-right: 14px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: 58%;
  }
`;

export const SelectItem = styled.div`
  cursor: pointer;
`;

export const SearchInput = styled.input`
  padding: 4px;
  margin-bottom: 8px;

  display: block;

  font-size: 12;
  line-height: calc(16 / 12);
  color: var(--see-more-link-color);

  border-style: none;
  background-color: var(--button-hover-color);
  border-bottom: 1px solid #f3f3f311;

  &:focus {
    color: var(--text-color);
    outline: transparent;
  }

  &::placeholder {
    color: var(--see-more-link-color);
  }

  &:focus::placeholder {
    color: transparent;
  }
`;
