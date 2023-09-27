
import AuthForm from '../RegistrationPage/Form/components/AuthForm';
import { SignUpForm } from './Form/SignUpForm';

const RegistrationPage = () => {
  return (
    <AuthForm title={'Sign Up'}>
      <SignUpForm />
    </AuthForm>
  );
};

export default RegistrationPage;
