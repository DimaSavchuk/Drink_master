import { AuthForm } from '../../../components/RegistartionLogin/AuthForm';
import { SignInForm } from '../../../components/RegistartionLogin/Forms/SignInForm/SignInForm';
const SignInPage = () => {
  return (
    <AuthForm title={'Sign In'}>
      <SignInForm />
    </AuthForm>
  );
};

export default SignInPage;
