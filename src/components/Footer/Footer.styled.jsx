import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterStyled = styled.footer`
  padding-top: 40px;
  padding-bottom: 18px;
  border-top: 1px solid rgba(243, 243, 243, 0.2);
`;

export const CommonWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
  }
`;
export const SocialList = styled.ul`
  display: flex;
  gap: 14px;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 31px;
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  border: 1px solid rgba(243, 243, 243, 0.2);
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 43px;
    flex-direction: row;
    gap: 411px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`;

export const NavLink = styled(Link)`
  color: #f3f3f3;
  font-weight: 400;
  line-height: 1.6;
`;

export const FormContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 309px;
  }

  @media (min-width: 1440px) {
  }
`;
export const Text = styled.p`
  color: #f3f3f3;
  font-weight: 400;
  line-height: 1.42;
  text-align: center;

  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 18px 24px;
  padding-right: 48px;

  max-width: 350px;
  align-self: center;

  color: #f3f3f3;
  font-weight: 400;
  line-height: 1.28;

  border-radius: 200px;
  border: 1px solid;
  border-color: rgba(243, 243, 243, 0.2);
  background-color: transparent;

  &::placeholder {
    color: #f3f3f3;
    font-weight: 400;
    line-height: 1.28;
  }

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 1.56;
  }

  @media (min-width: 1440px) {
  }
`;

export const Button = styled.button`
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  width: 100%;
  max-width: 350px;

  padding: 18px 0px;
  align-self: center;

  color: #f3f3f3;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.125;

  background-color: transparent;

  &:disabled {
    color: gray;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    font-size: 17px;
  }
`;

export const RightsContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 153px;
  }

  @media (min-width: 1440px) {
    gap: 0px;
    justify-content: space-between;
  }
`;

export const PolicyText = styled.p`
  color: rgba(243, 243, 243, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.24px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
    letter-spacing: -0.28px;
  }

  @media (min-width: 1440px) {
  }
`;

export const PolicyContainer = styled.div`
  display: flex;
  gap: 14px;

  @media (min-width: 768px) {
    gap: 16px;
  }

  @media (min-width: 1440px) {
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12;
  line-height: 1.16;
  margin-left: 25px;
`;
