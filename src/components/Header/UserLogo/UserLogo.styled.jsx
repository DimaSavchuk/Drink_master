import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UserLogoWrapper = styled.span`
  display: block;
  width: 32px;
  height: 32px;

  /* border-radius: 32px; */
  /* background-color: #f3f3f3; */
  
  /* background:
    url(<path-to-image>),
    lightgray -11.36px 0px / 157.912% 105.357% no-repeat,
    #f3f3f3; */

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    /* border-radius: 44px; */
    /* background-color: white; */
  }

  @media (min-width: 1280px) {
  }
`;
export const UserLogoImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: 44px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-right: 2px;
  padding-top: 0;
  padding-bottom: 0;

  background-color: transparent;
  border: none;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  @media (min-width: 375px) {
    margin-right: 14px;
  }

  @media (min-width: 768px) {
    gap: 14px;
    margin-right: 24px;
  }
  @media (min-width: 1280px) {
    gap: 14px;
    margin-right: 0px;
  }
`;
