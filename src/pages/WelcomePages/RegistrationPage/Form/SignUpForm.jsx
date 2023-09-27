import { DatePickerInput } from './components/DatePickerInput';
import { FormFieldInput } from './components/FormField';

import {
  DatePickerContainer,
  Form,
  SubmitBtn,
  StyledLink,
} from './SignUpForm.styled';
import { Formik } from 'formik';

import * as Yup from 'yup';
import 'flatpickr/dist/themes/dark.css';
import './components/flatpikr_calender.css';
import { PasswordField } from './components/PasswordField';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

// const emailRegex = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The name is too short!')
    .required(' Name is required'),
  birthDate: Yup.string().required('* Birth date is required'),
  email: Yup.string()
    .email('* This is an ERROR e-mail')
    .required('* E-mail is required'),
  // .matches(emailRegex),
  password: Yup.string()
    .min(7, 'This is an ERROR password, too short! Minimum 8 symbols.')
    .max(20, 'This is an ERROR password, too Long!')
    .required('Password is required'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [isDate, setIsDate] = useState(false); // <-- Create a state to store datepicker instance
  const [datepickerInstance, setDatepickerInstance] = useState(null);

  return (
    <DatePickerContainer>
      <Formik
        initialValues={{
          name: '',
          birthDate: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, setSubmitting, setFieldValue }) => {
          setSubmitting(true);
          dispatch(signUpUser(values))
            .unwrap()
            .then((res) => {
              console.log(res);
              if (res && res.status === 201) {
                toast.success('Registration successful');
              }
            })
            .catch((errorStatus) => {
              if (errorStatus === 409) toast.error('User already exists...');
              else toast.error('Something went wrong... Try again...');
            });
          setIsDate(false);
          resetForm();
          datepickerInstance.destroy();
          setFieldValue('birthDate', '');
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <FormFieldInput
              fieldName="name"
              fieldType="name"
              placeholderText="Name"
              touched={touched}
              errors={errors}
            />
            <DatePickerInput
              errors={errors}
              touched={touched}
              placeholderText={'dd/mm/yyyy'}
              isDate={isDate}
              setIsDate={setIsDate}
              setDatepickerInstance={setDatepickerInstance}
            />
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
            <SubmitBtn type="submit" disabled={isSubmitting}>
              Submit
            </SubmitBtn>
            <StyledLink to="/login"> Sign In</StyledLink>
          </Form>
        )}
      </Formik>
    </DatePickerContainer>
  );
};
