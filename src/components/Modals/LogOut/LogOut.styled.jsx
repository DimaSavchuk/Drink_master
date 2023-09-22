// import styled from 'styled-components';

// // Styled components for the modal
// export const ModalOverlay = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-top: 130px;
// `;

// export const ModalContent = styled.div`
//     padding: 50px;
//     border-radius: 16px;
//     background: #161F37;
//     box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.10);
//     text-align: center;
//     width:335px;
//     height: 193px;

//     @media screen and (min-width: 768px) {
//         width: 500px;
//         height: 215px;   
//     }
    
// `;

// export const CloseBtn = styled.btn`
//     margin-top: 14px;
//     margin-left: 297px;
//     margin-bottom: 12px;
//     background: none;
//     outline: none;
//     border: none;
//     cursor: pointer;
//     font-size: 1.5rem;
//     width: 24px;
//     height: 24px;  
//     @media screen and (min-width: 768px) {
//     width: 32px;
//     height: 32px;
//     margin-top: 18px;
//     margin-left: 450px;
//     margin-right: 0px;
// }
// `;

// export const Title = styled.h2`
//     font-family: Manrope;
//     font-size: 14px;
//     font-weight: 400;
//     font-style: normal;
//     text-align: center;
//     line-height: 1.29;
//     letter-spacing: -0.28px;
//     color: rgba(243, 243, 243, 1);

// @media screen and (min-width: 768px) {
//     font-size: 18px;
//     line-height: 1.33;
//     letter-spacing: -0.36px;
//   }
// `;

// export const ButtonContainer = styled.div`
//     margin: 25px 50px 50px 50px;
//     gap: 8px;

// @media screen and (min-width: 768px) {
//         margin-top: 37px;
//         gap: 12px;
//     }
// `;

// export const Button = styled.button`
//     display: block;
//     padding: 16px 41px;
//     border-radius: 42px;
//     outline: none;
//     border: none;
//     background-color: rgb(243, 243, 243);
//     color: rgb(10, 10, 17);
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 600;
//     line-height: 1.13;
//     transition: all 0.5s ease 0s;
//     cursor: pointer;

// @media screen and (min-width: 768px) {
//         padding: 18px 69px;
//     }

// & :hover {
//     background-color: rgb(10, 10, 17);
//     color: rgb(243, 243, 243);
// }
// `;


import styled from 'styled-components';


export const ModalWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 150px;
`;
export const ModalContent = styled.div`
    background-color: var(--btn-hover-color);
    border-radius: 8px;
    width: 335px;
height: 193px;
    margin: 0;
    padding: 0;
@media screen and (min-width: 768px) {
    width: 500px;
    height: 215px;
}
`;
export const CloseButton = styled.button`
    margin-top: 14px;
    margin-left: 297px;
    margin-bottom: 12px;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    width: 24px;
    height: 24px;
@media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-top: 18px;
    margin-left: 450px;
    margin-right: 0;
}
`;
export const ModalText = styled.h1`
    color: var(--main-text-color);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.29; 
    letter-spacing: -0.28px;
    margin-bottom: 25px;
@media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33; 
}
`;
export const ButtonWrapper = styled.div`
    width: 285px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px;
    padding: 0;
@media screen and (min-width: 768px) {
    width: 400px;
    margin-top: 12px;
    margin-left: 50px;
}
`;
export const LogOutButton = styled.button`
    display: block;
    padding: 16px 41px;
    border-radius: 42px;
    outline: none;
    border: none;
    background-color: #434D67;
    color: var(--main-text-color);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.13;
    transition: background-color 0.5s ease;
&:hover {
    background-color: var(--main-text-color);
    color: var(--btn-hover-color);
}
@media screen and (min-width: 768px) {
    padding: 18px 69px;
}
`;