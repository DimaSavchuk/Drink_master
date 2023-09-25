import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import {
  Label,
  FormField,
  ErrorMessage,
  Calendar,
  FieldWrapper,
  CorrectText,
} from '../SignUpForm.styled';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
import './flatpikr_calender.css';

export const DatePickerInput = ({ errors, touched, placeholderText }) => {
  const { setFieldValue, values } = useFormikContext();
  const dateInputClass = values.date
    ? 'success'
    : touched.date && errors.date
    ? 'fail'
    : 'unfilled';

  useEffect(() => {
    flatpickr('#date', {
      altInput: true,
      altFormat: 'd/m/Y',
      dateFormat: 'd/m/Y',
      minDate: '01-01-1930',
      maxDate: ' today',
      onChange: function (selectedDates, dateStr) {
        setFieldValue('date', dateStr);
      },
    });
  }, [setFieldValue]);

  return (
    <Label>
      <FieldWrapper>
        <FormField
          id="date"
          name="date"
          type="text"
          placeholder={placeholderText}
          aria-label={placeholderText}
          className={dateInputClass}
        />
        <Calendar size="20" />
      </FieldWrapper>
      {values.date && touched.date && !errors.date && (
        <CorrectText>This is CORRECT date</CorrectText>
      )}
      <ErrorMessage name="date" component="span" />
    </Label>
  );
};
