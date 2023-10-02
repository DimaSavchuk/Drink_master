import { Formik, Form } from 'formik';
import { ownDrink } from '../../../services/axiosConfig';
import { AddButton, DrinkFormWrapper } from './FormMain.styled';
import { useFetchGlasses } from '../../../Hooks/useFetchGlasses';
import { useFetchCategories } from '../../../Hooks/useFetchCategories';
import { useFetchIngredients } from '../../../Hooks/useFetchIngredients';
import TitleBlock from '../TitleBlock';
import IngredientsBlock from '../IngredientsBlock/IngredientsBlock';
import RecipePreparation from '../RecipePreparation/RecipePreparation';
import * as yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectFirstRecipe } from '../../../redux/motivation/motivationSelects';
import { Motivation } from '../../Motivation/Motivation';
import { useState } from 'react';

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

const FormMain = () => {
  const dispatch = useDispatch();

  const onSubmitForm = (data, action) => {
    data.id = nanoid();
    ownDrink(data, dispatch);
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
        // validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {({ setFieldValue, errors }) => (
          <Form>
            <TitleBlock
              categoriesList={categories.drinkCategories}
              glassesList={glasses.drinkGlasses}
              setValue={setFieldValue}
              errors={errors}
            />
            <IngredientsBlock
              items={ingredients.drinkIngredients}
              title={'Ingridients'}
            />
            <RecipePreparation
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

export default FormMain;
