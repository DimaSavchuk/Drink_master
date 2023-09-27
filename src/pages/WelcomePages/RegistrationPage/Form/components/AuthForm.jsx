// import React from 'react';
import { Container, Title, Wrapper, Section } from './AuthForm.styled';

const AuthForm = ({ title, children }) => {
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

export default AuthForm;
