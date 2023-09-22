import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSection = styled.section`
  padding-top: 80px;
  padding-bottom: 112px;

  @media (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }

  @media (min-width: 1440px) {
    padding-top: 128px;
    padding-bottom: 160px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;

  @media (min-width: 768px) {
    margin-bottom: 28px;

    font-size: 56px;
    line-height: 1.07;
  }

  @media (min-width: 1440px) {
    font-size: 64px;
    line-height: 1.06;
  }
`;

export const Text = styled.p`
  margin-bottom: 32px;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;

  @media (min-width: 768px) {
    margin-bottom: 48px;

    font-size: 18px;
    line-height: 1.33;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const AddDrinkLink = styled(Link)`
  margin-bottom: 47px;

  display: inline-flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 42px;
  background: #f3f3f3;

  color: #161f37;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  transition:
    color 300ms linear,
    background-color 300ms linear;

  &:hover,
  &:focus {
    color: #f3f3f3;
    background-color: #161f37;
  }
  @media (min-width: 768px) {
    margin-bottom: 54px;

    font-size: 16px;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    /* margin-bottom: 40px; */
  }
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  @media (min-width: 1440px) {
    max-width: 715px;
    margin-top: 57px;
  }
`;
