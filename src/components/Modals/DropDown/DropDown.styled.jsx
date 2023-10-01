import styled from 'styled-components';


export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-right: 20px;
  display: flex;
  /* flex-direction: column; */
  justify-content: flex-end;
  z-index: 2;
  background-color: transparent;
  padding-top:75px;

  @media screen and (min-width: 375px) {
    
    padding-right: calc(((100w - 375px) / 2) + 20px)
  }
  @media screen and (min-width: 768px) {
    padding-top: 85px;
    padding-right: calc(((100w - 768px) / 2) + 32px)
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-right: calc(((100w - 1280px) / 2) + 20px)
  }
`;
export const ModalContent = styled.div`
  background-color: #161F37;
  border-radius: 8px;
  /* width: 177px; */
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
  color: #F3F3F3;
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
  /* top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  width: 141px;
  padding: 12px 44px;
  margin-top: 20px; 
  border-radius: 42px;
  outline: none;
  border: none;
  background-color: #434D67;
  color: #F3F3F3;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #F3F3F3;
    color: #161f37;
  }
  `;