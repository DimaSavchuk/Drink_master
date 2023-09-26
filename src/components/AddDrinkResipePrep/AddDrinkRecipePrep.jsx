import { Field } from 'formik';
import { FieldTextArea, FieldWrapper } from './AddDrinkRecipePrep.styled';

const AddDrinkRecipePrep = () => {
  return (
    <FieldWrapper>
      <h3>Recipe Preparation</h3>
      <FieldTextArea
        name="drinkRecipePreparation"
        placeholder="Enter the recipe"
        as="textarea"
      />
    </FieldWrapper>
  );
};

export default AddDrinkRecipePrep;
