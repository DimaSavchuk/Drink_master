import { useField } from 'formik';
import {
  FieldTextArea,
  FieldWrapper,
  LabelTextArea,
} from './RecipePreparation.styled';
import { ErrorText } from './RecipePreparation.styled';

const RecipePreparation = ({ error, touched }) => {
  const [field] = useField('recipePreparation');

  return (
    <FieldWrapper>
      <h3>Recipe Preparation</h3>
      <div style={{ position: 'relative' }}>
        <FieldTextArea
          name="recipePreparation"
          placeholder="Enter the recipe"
          {...field}
        />
        <LabelTextArea htmlFor="recipePreparation">
          Enter the recipe
        </LabelTextArea>
      </div>
      {touched && error ? <ErrorText>{error}</ErrorText> : null}
    </FieldWrapper>
  );
};

export default RecipePreparation;
