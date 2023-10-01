import { Formik, Form } from 'formik';
import AddDrinkIngredients from '../AddDrinkIngredients';
import AddDrinkTitle from '../AddDrinkTitle';
import AddDrinkRecipePrep from '../AddDrinkResipePrep/AddDrinkRecipePrep';
import { ownDrink } from '../../services/axiosConfig';
import { AddButton, DrinkFormWrapper } from './AddDrinkForm.styled';
import { useFetchGlasses } from '../../Hooks/useFetchGlasses';
import { useFetchCategories } from '../../Hooks/useFetchCategories';
import { nanoid } from '@reduxjs/toolkit';
import { useFetchIngredients } from '../../Hooks/useFetchIngredients';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().trim().required('Please enter a drink title'),
  recipe: yup
    .string()
    .trim()
    .required('Please enter information about the recipe'),
  category: yup.string().required('Must have more than 1 item'),
  glass: yup.string().required('Must have more than 1 item'),
  ingredients: yup
    .array()
    .length(1, 'You must have more than 1 item')
    .required(),
  file: yup
    .mixed()
    .test('file', 'Please select a valid image file', (value) => {
      if (!value) {
        return true;
      }
      return value && value.type.startsWith('image/');
    }),
  recipePreparation: yup.string().trim().required('enter about a recipe'),
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
