import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  background-color: #0a0a11;
  @media (min-width: 768px) {
    padding: 140px 0;
  }
  @media (min-width: 1440px) {
    padding-top: 158px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  color: #f3f3f3;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.18;
  @media (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 62px;
    font-size: 64px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  width: 236px;
  margin-top: 32px;
  margin-bottom: 0;
  text-align: center;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.42;
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
`;

export const Gradient = styled.div`
  position: absolute;
  transform: translate(-80%, -60%);
  width: 520px;
  height: 550px;
  flex-shrink: 0;

  border-radius: 550px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`;
