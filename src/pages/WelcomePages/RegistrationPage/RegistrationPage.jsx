// import React from 'react';
import {
  RegistrationPageStyled,
  Container,
  Title,
  Wrapper,
} from './RegistrationPage.styled';
import { SignUpForm } from './Form/SignUpForm';
import { ToastContainer } from 'react-toastify';

const RegistrationPage = () => {
  return (
    <RegistrationPageStyled>
      <ToastContainer theme="dark" />

      <Container>
        <Wrapper>
          <Title>Sign Up</Title>

          <SignUpForm />

        </Wrapper>
      </Container>
    </RegistrationPageStyled>
  );
};

export default RegistrationPage;
