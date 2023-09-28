// import React from 'react';
import { Container, Title, Wrapper, Section } from './AuthForm.styled';

export const AuthForm = ({ title, children }) => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Title>{title}</Title>
          {children}
        </Wrapper>
      </Container>
    </Section>
  );
};

