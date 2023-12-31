import styled from 'styled-components';

export const Section = styled.section`
  padding: 152px 0;
  @media (min-width: 768px) {
    padding: 224px 0;
  }
  @media (min-width: 1440px) {
    padding-top: 244px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  color: var(--link-color);
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
  color: var(--link-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.42;
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
`;

