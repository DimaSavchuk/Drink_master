import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  Label,
  Form,
  FormField,
  LastLabel,
  ErrorMessage,
  SubmitBtn,
  CorrectText,
  Checked,
  Exclamation,
  FieldWrapper,
  Eye,
  EyeOff,
} from './SignInForm.styled';

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('This is an ERROR e-mail')
    .required('E-mail is required'),
  password: Yup.string()
    .min(7, 'This is an ERROR password, too short! Minimum 7 symbols.')
    .max(16, 'This is an ERROR password, too Long!')
    .required('Password is required'),
});

export const SignInForm = () => {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <Label>
            <FieldWrapper>
              <FormField
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                outlinecolor={
                  (touched.email && errors.email && '#DA1414') || // Red border for email validation error
                  (touched.email && values.email && !errors.email && '#3CBC81') // Green border for valid email
                }
              />

              {values.email && touched.email && !errors.email && (
                <Checked size={24} />
              )}
              {values.email && touched.email && errors.email && (
                <Exclamation size={24} />
              )}
            </FieldWrapper>

            {values.email && touched.email && !errors.email && (
              <CorrectText>This is CORRECT e-mail</CorrectText>
            )}
            <ErrorMessage name="email" component="span" />
          </Label>

          <LastLabel>
            <FieldWrapper>
              <FormField
                type={showHidePassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                outlinecolor={
                  (touched.password && errors.password && '#DA1414') || // Red border for password validation error
                  (touched.password &&
                    values.password &&
                    !errors.password &&
                    '#3CBC81') // Green border for valid password
                }
              />

              {!showHidePassword ? (
                <Eye
                  onClick={() => setShowHidePassword(!showHidePassword)}
                  size={24}
                />
              ) : (
                <EyeOff
                  onClick={() => setShowHidePassword(!showHidePassword)}
                  size={24}
                />
              )}
            </FieldWrapper>

            {values.password && touched.password && !errors.password && (
              <CorrectText>This is CORRECT password</CorrectText>
            )}
            <ErrorMessage name="password" component="span" />
          </LastLabel>

          <SubmitBtn type="submit">Sign In</SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};