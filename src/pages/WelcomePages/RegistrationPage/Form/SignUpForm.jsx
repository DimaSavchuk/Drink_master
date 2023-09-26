import { DatePickerInput } from './components/DatePickerInput';
import { FormFieldInput } from './components/FormField';

import { DatePickerContainer, Form, SubmitBtn } from './SignUpForm.styled';
import { Formik } from 'formik';

import * as Yup from 'yup';
import 'flatpickr/dist/themes/dark.css';
import './components/flatpikr_calender.css';
import { PasswordField } from './components/PasswordField';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../../redux/auth/authOperations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
    .min(7, 'This is an ERROR password, too short! Minimum 7 symbols.')
    .max(20, 'This is an ERROR password, too Long!')
    .required('Password is required'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  useEffect(() => {
  //
  //  }, []);

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
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          dispatch(signUpUser(values))
            .unwrap()
            .then((res) => {
              console.log(res);
              if (res && res.status === 201) {
                navigate('/');
                toast.success('Registration successful');
              }
            })
            .catch((errorStatus) => {
              if (errorStatus === 409) toast.error('User already exists...');
              else toast.error('Something went wrong... Try again...');
            });
          setSubmitting(false);
          resetForm();
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
          </Form>
        )}
      </Formik>
    </DatePickerContainer>
  );
};
