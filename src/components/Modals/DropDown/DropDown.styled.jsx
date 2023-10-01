import styled from 'styled-components';


export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
  background-color: transparent;
  padding-top:75px;

  @media screen and (min-width: 375px) {
    
    padding-right: calc(((100vw - 375px) / 2) + 20px);
  }
  @media screen and (min-width: 768px) {
    padding-top: 85px;
    padding-right: calc(((100vw - 768px) / 2) + 32px);
  }

  @media screen and (min-width: 1440px) {
    padding-right: calc(((100vw - 1280px) / 2) + 20px);
  }
`;
export const ModalContent = styled.div`
  background-color: var(--select-list-color);
  border-radius: 8px;
  height: 134px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ChangeProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  width: 171px;
  height: 18px;
  padding: 18px;
  border: none;
  border-radius: 42px;
  background-color: transparent;
  cursor: pointer;
  color: var(--button-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.29;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 1px 0px 3px 4px rgba(35, 93, 171, 0.4) inset;
  }
`;
export const LogOutButton = styled.button`
  display: block;
  width: 141px;
  padding: 12px 44px;
  margin-top: 20px; 
  border-radius: 42px;
  outline: none;
  border: none;
  background-color: var(--scroll-color);
  color: var(--button-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: var(--button-color);
    color: var(--select-list-color);
  }
  `;