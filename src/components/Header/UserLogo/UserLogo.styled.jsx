// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// export const UserLogoWrapper = styled.div`
//   width: 32px;
//   height: 32px;

//   border-radius: 32px;
//   background-color: #f3f3f3;

  /* background:
    url(<path-to-image>),
    lightgray -11.36px 0px / 157.912% 105.357% no-repeat,
    #f3f3f3; */

//   @media (min-width: 768px) {
//     width: 44px;
//     height: 44px;
//     border-radius: 44px;
//     background-color: white;
//   }

//   @media (min-width: 1280px) {
//   }
// `;
// export const UserLogoImg = styled.img`
//   width: 32px;
//   height: 32px;
//   @media (min-width: 768px) {
//     width: 44px;
//     height: 44px;
//   }
// `;

// export const Button = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   margin-right: 14px;
//   background-color: transparent;
//   border: none;

//   color: #f3f3f3;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 1.5;

//   @media (min-width: 768px) {
//     gap: 14px;
//     margin-right: 24px;
//   }
//   @media (min-width: 1280px) {
//     gap: 14px;
//     margin-right: 0px;
//   }
// `;


import styled from 'styled-components';
export const UserLogoWrp = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const UserAvatarWrp = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
export const UserAvatar = styled.img`
  object-fit: contain;
  overflow: hidden;
  border-radius: 50%;
`;

export const NameStyled = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1,28;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1, 5;
  }
  @media screen and (min-width: 1440px) {
  }
`;