// import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  Form,
  FormField,
  LastLabel,
  ErrorMessage,
  SubmitBtn,
} from './SignInForm.styled';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('E-mail is required'),
  password: Yup.string()
    .min(7, 'Too Short! Minimum 7 symbols.')
    .max(16, 'Too Long!')
    .required('Password is required'),
});

export const SignInForm = () => {
  const handleSubmit = (values, action) => {
    console.log(values);
    // dispatch(signInUser(values))
    //   .unwrap()
    //   .then(() => toast.success('Registratio successful'))
    //   .catch(() => toast.error('User already exist...'));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          <FormField type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="span" />
        </Label>

        <LastLabel>
          <FormField type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />
        </LastLabel>

        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </Form>
    </Formik>
  );
};
