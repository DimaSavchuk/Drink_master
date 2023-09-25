import { useFormikContext } from 'formik';
import {
  Label,
    ErrorMessage,
  FormField,
  FieldWrapper,
  CorrectText,
  Checked,
  Exclamation,
} from '../SignUpForm.styled';

export const FormFieldInput = ({ fieldName, placeholderText,  }) => {
  const { touched, errors, values } = useFormikContext();

  const fieldInputClass =
    values[fieldName] && touched[fieldName] && !errors[fieldName]
      ? 'success'
      : touched[fieldName] && errors[fieldName]
      ? 'fail'
      : 'unfilled';

  return (
    <div>
      <Label>
        <FieldWrapper>
          <FormField
            className={fieldInputClass}
            name={fieldName}
            type="text"
            placeholder={placeholderText}
            aria-label={placeholderText}
          />
          {values[fieldName] && touched[fieldName] && !errors[fieldName] && (
            <Checked size={24} />
          )}
          {values[fieldName] && touched[fieldName] && errors[fieldName] && (
            <Exclamation size={24} />
          )}
        </FieldWrapper>
        {values[fieldName] && touched[fieldName] && !errors[fieldName] && (
          <CorrectText>This is CORRECT {fieldName}</CorrectText>
        )}
        <ErrorMessage name={fieldName} component="span" />
      </Label>
    </div>
  );
};
