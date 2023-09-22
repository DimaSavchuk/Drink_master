// import React from 'react';

import { SignInForm } from './SignInForm/SignInForm';
import {
  SignInPageStyled,
  Container,
  Title,
  Wrapper,
  StyledLink,
} from './SignInPage.styled';

const SignInPage = () => {
  return (
    <SignInPageStyled>
      <Container>
        <Wrapper>
          <Title>Sign In</Title>

          <SignInForm />

          <StyledLink to="/registration"> Sign Up</StyledLink>
        </Wrapper>
      </Container>
    </SignInPageStyled>
  );
};

export default SignInPage;
