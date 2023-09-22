import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StartPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;

  background-image: url('src/assets/start/start_mobile@1x.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background-image: url('src/assets/start/start_mobile@2x.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('src/assets/start/start_tablet@1x.jpg');
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url('src/assets/start/start_tablet@2x.jpg');
  }
  @media (min-width: 1440px) {
    align-content: center;
    background-image: url('src/assets/start/start@1x.jpg');
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url('src/assets/start/start@2x.jpg');
  }
`;

export const Container = styled.div`
  margin: auto;
  width: 335px;
  padding: 0 20px;

  @media (max-width: 767.98px) {
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 1240px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.02;
  line-height: 1.28;
  color: #fafafa;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    width: 470px;
    font-size: 18px;
    line-height: 1.3;
  }

  @media (min-width: 1440px) {
    width: 485px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 767.98px) {
    justify-content: center;
  }

  @media (min-width: 1440px) {
    gap: 15px;
  }
`;
export const StyledLink = styled(Link)`
  padding: 14px 40px;
  border-radius: 42px;
  min-width: 50px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  color: #f3f3f3;
  background-color: transparent;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  cursor: pointer;

  &:hover {
    color: #161f37;
    background-color: #f3f3f3;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    min-width: 56px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.12;
  }

  @media (min-width: 1440px) {
    min-width: 47px;
  }
`;