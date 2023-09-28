import {
  FieldTextArea,
  FieldWrapper,
  LabelTextArea,
} from './AddDrinkRecipePrep.styled';
import { ErrorText } from './AddDrinkRecipePrep.styled';

const AddDrinkRecipePrep = ({ error, setValue }) => {
  return (
    <FieldWrapper>
      <h3>Recipe Preparation</h3>
      <div style={{ position: 'relative' }}>
        <FieldTextArea
          name="recipePreparation"
          placeholder="Enter the recipe"
          onChange={(e) => setValue('recipePreparation', e.target.value)}
          as="textarea"
        />
        <LabelTextArea htmlFor="recipePreparation">
          Enter the recipe
        </LabelTextArea>
      </div>
      {error ? <ErrorText>{error}</ErrorText> : null}
    </FieldWrapper>
  );
};

export default AddDrinkRecipePrep;
