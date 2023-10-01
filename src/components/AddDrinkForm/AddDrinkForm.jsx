import { Formik, Form } from 'formik';
import AddDrinkIngredients from '../AddDrinkIngredients';
import AddDrinkTitle from '../AddDrinkTitle';
import AddDrinkRecipePrep from '../AddDrinkResipePrep/AddDrinkRecipePrep';
import { ownDrink } from '../../services/axiosConfig';
import { AddButton, DrinkFormWrapper } from './AddDrinkForm.styled';
import { useFetchGlasses } from '../../Hooks/useFetchGlasses';
import { useFetchCategories } from '../../Hooks/useFetchCategories';
import { nanoid } from '@reduxjs/toolkit';
import * as yup from 'yup';
import { useFetchIngredients } from '../../Hooks/useFetchIngredients';

const validationSchema = yup.object({
  title: yup.string().trim().required('enter drink title'),
  recipe: yup.string().trim().required('enter about recipe'),
  category: yup.string().required('must have more than 1 item'),
  glass: yup.string().required('must have more than 1 item'),
  alcoholicType: yup.string().required('choose alcoholic type drink'),
  // ingredients: yup.array().length(1, 'must have more than 1 item').required(),
  // file: '',
  // recipePreparation: yup.string().trim().required('enter about a recipe'),
});

const initialValues = {
  title: '',
  recipe: '',
  category: '',
  glass: '',
  alcoholicType: 'Non-alcoholic',
  ingredients: [],
  file: null,
  recipePreparation: '',
};

const AddDrinkForm = () => {
  const onSubmitForm = (data, action) => {
    data.id = nanoid();
    ownDrink(data);
    action.resetForm();
  };

  const categories = useFetchCategories();
  const glasses = useFetchGlasses();
  const ingredients = useFetchIngredients();

  return (
    <DrinkFormWrapper>
      <h2>Add drink</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ setFieldValue, errors }) => (
          <Form>
            <AddDrinkTitle
              categoriesList={categories.drinkCategories}
              glassesList={glasses.drinkGlasses}
              setValue={setFieldValue}
              errors={errors}
            />
            <AddDrinkIngredients
              ingredientsList={ingredients.drinkIngredients}
            />
            <AddDrinkRecipePrep
              setValue={setFieldValue}
              error={errors.recipePreparation}
            />
            <AddButton type="submit">Add</AddButton>
          </Form>
        )}
      </Formik>
    </DrinkFormWrapper>
  );
};

export default AddDrinkForm;
