import { AuthForm } from '../../../components/RegistartionLogin/AuthForm';
import { SignUpForm } from '../../../components/RegistartionLogin/Forms/SignUpForm/SignUpForm';
const RegistrationPage = () => {
  return (
    <AuthForm title={'Sign Up'}>
      <SignUpForm />
    </AuthForm>
  );
};

export default RegistrationPage;
