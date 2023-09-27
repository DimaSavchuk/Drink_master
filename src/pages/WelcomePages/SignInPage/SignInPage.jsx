// import React from 'react';
// import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import { SignInForm } from './SignInForm/SignInForm';
import {
  SignInPageStyled,
  Container,
  Title,
  Wrapper,
} from './SignInPage.styled';

const SignInPage = () => {
  return (
    <SignInPageStyled>

      <Container>
        <Wrapper>
          <Title>Sign In</Title>

          <SignInForm />

        </Wrapper>
      </Container>
    </SignInPageStyled>
  );
};

export default SignInPage;
