import { useEffect, useRef } from 'react';
import { useFormikContext } from 'formik';
import {
  Label,
  FieldWrapper,
  FormField,
  ErrorMessage,
  Calendar,
  CorrectText,
  Error,
} from './Fields.styled';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/themes/dark.css';
import './flatpikr_calender.css';

export const DatePickerInput = ({
  errors,
  touched,
  placeholderText,
  isDate,
  setIsDate,
  setDatepickerInstance,
  setIsError,
  isError,
}) => {
  const { setFieldValue } = useFormikContext();
  const datepickerRef = useRef();

  useEffect(() => {
    datepickerRef.current = flatpickr('#date', {
      altInput: true,
      disableMobile: true,
      altFormat: 'd/m/Y',
      dateFormat: 'U',
      minDate: '01-01-1930',
      maxDate: 'today',
      onReady: function (_, dateStr) {
        const altInput = this._input;
        altInput.classList.remove('invalid', 'success', 'unfilled');
        altInput.classList.add(dateStr ? 'success' : 'unfilled');

        if (touched.birthDate && errors.birthDate) {
          altInput.classList.remove('unfilled', 'success');
          altInput.classList.add('invalid');
        }
        if (isError) {
          altInput.classList.add('invalid');
        }
      },
      onChange: function (_, dateStr) {
        setFieldValue('birthDate', dateStr);
        const altInput = this._input;

        altInput.classList.remove('invalid', 'success', 'unfilled');
        if (dateStr) {
          setIsDate(true);
          setIsError(false);
          altInput.classList.add('success');
        } else {
          setIsDate(false);
          setIsError(true);
          altInput.classList.add('unfilled');
        }
      },
      onClose: function (_, dateStr) {
        const altInput = this._input;
        altInput.classList.remove('invalid', 'success', 'unfilled');
        if (!dateStr) {
          altInput.classList.remove('unfilled', 'success');
          altInput.classList.add('invalid');
          setIsError(true);
        } else if (touched.birthDate && errors.birthDate) {
          altInput.classList.remove('unfilled', 'success');
          altInput.classList.add('invalid');
          setIsError(true);
        }
      },
    });
    setDatepickerInstance(datepickerRef.current);

    return () => {
      datepickerRef.current.destroy();
    };
  }, [
    setDatepickerInstance,
    setFieldValue,
    setIsDate,
    errors.birthDate,
    touched.birthDate,
    setIsError,
    isError,
  ]);

  return (
    <Label>
      <FieldWrapper>
        <FormField
          id="date"
          name="birthDate"
          type="text"
          placeholder={placeholderText}
          aria-label={placeholderText}
        />
        <Calendar size="20" />
      </FieldWrapper>
      {isDate && !isError && <CorrectText>This is CORRECT date</CorrectText>}
      {isError && <Error>Birth date is required</Error>}
      {!isError && !isDate && (
        <ErrorMessage name="birthDate" component="span" />
      )}
    </Label>
  );
};
