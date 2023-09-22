import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Label,
  Form,
  FormField,
  LastLabel,
  ErrorMessage,
  SubmitBtn,
  Calendar,
  FormFieldDate,
  DateFieldWrapper,
} from './SignUpForm.styled';


const SignUpSchema = Yup.object().shape({
  name: Yup.string().min(3, '* Too Short!').required('* Name is required'),
  birthdate: Yup.string().required('* Birth date is required'),
  email: Yup.string().email('* Invalid email').required('* E-mail is required'),
  password: Yup.string()
    .min(7, '* Too Short! Minimum 7 symbols.')
    .max(20, '* Too Long!')
    .required('* Password is required'),
});

export const SignUpForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
    setSelectedDate(null);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        birthdate: null,
        email: '',
        password: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={handleSubmit}
    >
      {(
        { setFieldValue }, // Access the setFieldValue function
      ) => (
        <Form>
          <Label>
            <FormField name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="span" />
          </Label>

          <Label>
            <DateFieldWrapper>
              <FormFieldDate
                name="birthdate"
                placeholder={'dd/mm/yyyy'}
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date[0]);
                  setFieldValue('birthdate', date[0]); // Update Formik field value
                }}
                options={{
                  altInput: true,
                  altFormat: 'd/m/Y',
                  dateFormat: 'd/m/Y',
                  minDate: '01-01-1930',
                  maxDate: '01-01-3023',
                }}
              />
              <Calendar size="20" />
            </DateFieldWrapper>
            <ErrorMessage name="birthdate" component="span" />
          </Label>

          <Label>
            <FormField type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="span" />
          </Label>

          <LastLabel>
            <FormField type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="span" />
          </LastLabel>

          <SubmitBtn type="submit">Sign Up</SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
