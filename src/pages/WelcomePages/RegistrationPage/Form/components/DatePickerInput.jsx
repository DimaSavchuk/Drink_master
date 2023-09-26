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
    const flatpickrInstance = flatpickr('#date', {
      altInput: true,
      altFormat: 'd/m/Y',
      dateFormat: 'U',
      minDate: '01-01-1930',
      maxDate: 'today',
      onChange: function (selectedDates, dateStr) {
        setFieldValue('birthDate', dateStr);
        this._input.classList.remove('invalid', 'success', 'unfilled');
        this._input.classList.add(dateStr ? 'success' : 'unfilled');
      },
      onClose: function () {
        const altInput = this._input;
        if (altInput.value === '') {
          altInput.classList.remove('unfilled', 'success');
          altInput.classList.add('invalid');
        }
      },
    });

    return () => {
      flatpickrInstance.destroy();
    };
  }, [setFieldValue]);

  return (
    <Label>
      <FieldWrapper>
        <FormField
          id="date"
          name="birthDate"
          type="text"
          placeholder={placeholderText}
          aria-label={placeholderText}
          className={dateInputClass}
        />
        <Calendar size="20" />
      </FieldWrapper>
      {values.birthDate && touched.birthDate && !errors.birthDate && (
        <CorrectText>This is CORRECT date</CorrectText>
      )}
      <ErrorMessage name="birthDate" component="span" />
    </Label>
  );
};
