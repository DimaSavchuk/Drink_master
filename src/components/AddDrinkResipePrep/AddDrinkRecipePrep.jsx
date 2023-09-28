import { Field } from 'formik';
import {
  FieldTextArea,
  FieldWrapper,
  LabelTextArea,
} from './AddDrinkRecipePrep.styled';
import { ErrorText } from '../AddDrinkTitle/AddDrinkTitle.styled';

const AddDrinkRecipePrep = ({ error }) => {
  return (
    <FieldWrapper>
      <h3>Recipe Preparation</h3>
      <div style={{ position: 'relative' }}>
        <FieldTextArea
          name="recipePreparation"
          placeholder="Enter the recipe"
          as="textarea"
        />
        <LabelTextArea htmlFor="recipePreparation">
          Enter the recipe
        </LabelTextArea>
        {error ? <ErrorText>{error}</ErrorText> : null}
      </div>
    </FieldWrapper>
  );
};

export default AddDrinkRecipePrep;
