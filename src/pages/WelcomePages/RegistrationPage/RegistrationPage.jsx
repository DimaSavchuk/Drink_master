// import React from 'react';
// import { CommonContainer } from '../../../components/GlobalStyles/CommonContainer.styled';
import {
  RegistrationPageStyled,
  Container,
  Title,
  Wrapper,
  StyledLink,
} from './RegistrationPage.styled';
import { SignUpForm } from './Form/SignUpForm';

const RegistrationPage = () => {
  return (
    <RegistrationPageStyled>
      <Container>
      <Wrapper>
        <Title>Sign Up</Title>

        <SignUpForm />

        <StyledLink to="/login"> Sign In</StyledLink>
      </Wrapper>
      </Container>
    </RegistrationPageStyled>
  );
};

export default RegistrationPage;
