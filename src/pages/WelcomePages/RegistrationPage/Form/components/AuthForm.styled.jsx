import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CommonContainer } from '../../../../../components/GlobalStyles/CommonContainer.styled'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-width: 100%;
  height: 100vh;

  background-image: url('./src/assets/start/start_mobile@1x.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 767.98px) and (min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767.98px) and (min-resolution: 192dpi),
    (max-width: 767.98px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_mobile@2x.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('./src/assets/start/start_tablet@1x.jpg');
  }
  @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start_tablet@2x.jpg');
  }
  @media (min-width: 1440px) {
    align-content: center;
    background-image: url('./src/assets/start/start@1x.jpg');
  }
  @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi),
    (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: url('./src/assets/start/start@2x.jpg');
  }
`;

export const Container = styled(CommonContainer)`
  @media (min-width: 375px) {
    width: 375px;
    /* margin: 0 auto; */
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.02;
  line-height: 1.14;
  color: #fafafa;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-decoration: underline;
  color: #f3f3f3;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;

  cursor: pointer;

  &:hover {
    /* color: #161f37; */
  }

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
