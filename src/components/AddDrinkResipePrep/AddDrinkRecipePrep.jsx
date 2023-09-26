import { Field } from 'formik';
import {
  FieldTextArea,
  FieldWrapper,
  LabelTextArea,
} from './AddDrinkRecipePrep.styled';

const AddDrinkRecipePrep = () => {
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
      </div>
    </FieldWrapper>
  );
};

export default AddDrinkRecipePrep;
