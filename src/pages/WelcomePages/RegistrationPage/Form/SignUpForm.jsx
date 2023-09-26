// import { useState } from 'react';
// import { Formik} from 'formik';
// import * as Yup from 'yup';

// import {
//   Label,
//   Form,
//   FormField,
//   LastLabel,
//   ErrorMessage,
//   SubmitBtn,
//   // DatePickerContainer,
//   FieldWrapper,
//   CorrectText,
//   Exclamation,
//   Checked,
//   Eye,
//   EyeOff,
//   } from './SignUpForm.styled';

import { DatePickerInput } from './components/DatePickerInput';
import { FormFieldInput } from './components/FormField';

import { DatePickerContainer, Form, SubmitBtn} from './SignUpForm.styled';
import { Formik} from 'formik';

import * as Yup from 'yup';
import 'flatpickr/dist/themes/dark.css';
import './components/flatpikr_calender.css';
import { PasswordField } from './components/PasswordField';



// const DatePickerInput = ({ errors, touched }) => {
//   const { setFieldValue, values } = useFormikContext();
//   const dateInputClass = values.date
//     ? 'success'
//     : touched.date && errors.date
//     ? 'fail'
//     : 'unfilled';

//   useEffect(() => {
//     flatpickr('#date', {
//       defaultDate: 'today',
//       onChange: function (selectedDates, dateStr) {
//         setFieldValue('date', dateStr);
//       },
//     });
//   }, [setFieldValue]);

//   return <Field id="date" name="date" className={dateInputClass} />;
// };


// const FormField = ({ fieldName, touched, errors, placeholderText }) => {
//   const { values } = useFormikContext();
//   const fieldInputClass = values[fieldName]
//     ? 'success'
//     : touched[fieldName] && errors[fieldName]
//     ? 'fail'
//     : 'unfilled';

//   return (
//     <div>
//       <Field
//         className={fieldInputClass}
//         name={fieldName}
//         type="text"
//         placeholder={placeholderText}
//       />
//       {errors[fieldName] && touched[fieldName] && (
//         <div>{errors[fieldName]}</div>
//       )}
//     </div>
//   );
// };



const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'The name is too short!')
    .required(' Name is required'),
  date: Yup.string().required('* Birth date is required'),
  email: Yup.string()
    .email('* This is an ERROR e-mail')
    .required('* E-mail is required'),
  password: Yup.string()
    .min(7, 'This is an ERROR password, too short! Minimum 7 symbols.')
    .max(20, 'This is an ERROR password, too Long!')
    .required('Password is required'),
});


export const SignUpForm = () => {

  //  useEffect(() => {
  //   
  //  }, []);

  return (
    <DatePickerContainer>
      <Formik
        initialValues={{ date: '', name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm, setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
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
              fieldType="password"
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


 