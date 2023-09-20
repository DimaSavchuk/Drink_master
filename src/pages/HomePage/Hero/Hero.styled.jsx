import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroSection = styled.section`
  overflow: hidden;
  max-width: 100%;
  padding-top: 80px;
  padding-bottom: 112px;
  background-color: #0a0a11;

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

export const Gradient = styled.div`
  position: absolute;
  transform: translate(
    ${(props) => props.translateX}px,
    ${(props) => props.translateY}px
  );

  /* transform: translate(-399px, -100px); */
  width: 520px;
  height: 550px;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
    transform: translate(
      ${(props) => props.translateXtablet}px,
      ${(props) => props.translateYtablet}px
    );
    /* transform: translate(-700px, -185px); */
    width: 784px;
    height: 829.931px;
    border-radius: 829.931px;
  }
  @media (min-width: 1440px) {
    transform: translate(
      ${(props) => props.translateXdesktop}px,
      ${(props) => props.translateYdesktop}px
    );
    /* transform: translate(-700px, -200px); */
    width: 784px;
    height: 849px;
    border-radius: 849px;
  }
`;
export const GradientRight = styled.div`
  position: absolute;
  transform: translate(
    ${(props) => props.translateX}px,
    ${(props) => props.translateY}px
  );

  /* transform: translate(200px, 200px); */
  width: 549px;
  height: 543px;

  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media (min-width: 768px) {
    transform: translate(
      ${(props) => props.translateXtablet}px,
      ${(props) => props.translateYtablet}px
    );
    /* transform: translate(-700px, -185px); */
  }
  @media (min-width: 1440px) {
    transform: translate(
      ${(props) => props.translateXdesktop}px,
      ${(props) => props.translateYdesktop}px
    );
    /* transform: translate(-700px, -200px); */
  }
`;
export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const GradientCenter = styled.div`
  @media (max-width: 1439px) {
    display: none;
  }
  position: absolute;
  transform: translate(
    ${(props) => props.translateX}px,
    ${(props) => props.translateY}px
  );

  width: 387px;
  height: 381px;
  flex-shrink: 0;

  border-radius: 387px;
  background: rgba(188, 230, 210, 0.3);
  filter: blur(104.8543701171875px);
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  @media (min-width: 1440px) {
    max-width: 715px;
    margin-top: 57px;
  }
`;
