import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSection = styled.section`
  padding-top: 80px;
  padding-bottom: 112px;
  background-color: #0a0a11;
`;

export const Title = styled.h1`
  margin-bottom: 16px;

  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
`;

export const Text = styled.p`
  margin-bottom: 32px;

  color: #f3f3f3;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;

export const AddDrinkLink = styled(Link)`
  margin-bottom: 61px;

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
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
`;

export const Gradient = styled.div`
  position: absolute;
  /* z-index: 0;
  top: 0;
  left: -120%;  */
  transform: translate(-80%, -60%);
  width: 520px;
  height: 550px;
  flex-shrink: 0;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;
