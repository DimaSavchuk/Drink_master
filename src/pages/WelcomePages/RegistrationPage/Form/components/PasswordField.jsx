import { useState } from 'react';
import { useFormikContext } from 'formik';
import {
    
    FormField,
  ErrorMessage,
  FieldWrapper,
  CorrectText,
    Eye,
  EyeOff,
  LastLabel
} from '../SignUpForm.styled';

export const PasswordField = ({ fieldName, fieldType, touched, errors, placeholderText }) => {
  const [showHidePassword, setShowHidePassword] = useState(false);

  const { values } = useFormikContext();
    const fieldInputClass =
      values[fieldName] && touched[fieldName] && !errors[fieldName]
        ? 'success'
        : touched[fieldName] && errors[fieldName]
        ? 'fail'
        : 'unfilled';

  return (
    <div>
      <LastLabel>
        <FieldWrapper>
          <FormField
            className={fieldInputClass}
            name={fieldName}
            type={fieldType}
            placeholder={placeholderText}
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
        {values[fieldName] && touched[fieldName] && !errors[fieldName] && (
          <CorrectText>This is CORRECT {fieldName}</CorrectText>
        )}
        <ErrorMessage name={fieldName} component="span" />
      </LastLabel>

      {/* {errors[fieldName] && touched[fieldName] && (
        <div>{errors[fieldName]}</div>
      )} */}
    </div>
  );
};
