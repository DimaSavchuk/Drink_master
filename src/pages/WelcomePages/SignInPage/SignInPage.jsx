// import React from 'react';
import AuthForm from '../RegistrationPage/Form/components/AuthForm';
import { SignInForm } from './SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <AuthForm title={'Sign In'}>
      <SignInForm />
    </AuthForm>
  );
};

export default SignInPage;
