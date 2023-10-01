import styled from "styled-components";

export const Container = styled.section`
  padding-top: 200px;
  padding-bottom: 112px;
  background-color: var(--background-color);
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

export const Text = styled.p`
  color: var(--text-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;