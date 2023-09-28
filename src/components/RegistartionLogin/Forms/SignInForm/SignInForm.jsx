import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, SubmitBtn, StyledLink } from '../Fields.styled';
import { FormFieldInput } from '../FormField';
import { PasswordField } from '../PasswordField';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(8, 'This is an ERROR password, too short! Minimum 7 symbols.')
    .max(20, 'This is an ERROR password, too Long!')
    .required('Password is required'),
});

export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values))
      .unwrap()
      .then(() => {
        toast.success('You are logged in');
      })
      .catch((errorStatus) => {
        if (errorStatus === 400) toast.error('Bed request... Try again');
        else if (errorStatus === 401)
          toast.error('E-mai or password is incorect...Try again.');
        else toast.error('User is not registered :(');
      });
    resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
    >
      {({ errors, touched }) => (
        <Form>
          <FormFieldInput
            fieldName="email"
            fieldType="email"
            placeholderText="Email"
            touched={touched}
            errors={errors}
          />

          <PasswordField
            fieldName="password"
            placeholderText="Password"
            touched={touched}
            errors={errors}
          />

          <SubmitBtn type="submit">Sign In</SubmitBtn>

          <StyledLink to="/registration"> Sign Up</StyledLink>
        </Form>
      )}
    </Formik>
  );
};
