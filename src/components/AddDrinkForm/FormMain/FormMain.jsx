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
import { useRef } from 'react';
import { toast } from 'react-toastify';

const validationSchema = yup.object().shape({
  title: yup.string().trim().required('Please enter a drink title'),
  recipe: yup
    .string()
    .trim()
    .required('Please enter information about the recipe'),
  category: yup.string().required('Please select a category'),
  glass: yup.string().required('Please select a glass'),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().required('Please select a title'),
        measure: yup.string().required('Please enter a measure'),
      }),
    )
    .required()
    .min(1, 'Select more than 1 item'),
  file: yup
    .mixed()
    // .test('file', 'Please select a valid image file', (value) => {
    //   if (!value) return true;
    //   return value && value.type.startsWith('image/*');
    // })
    .required('Please add the drink recipe image'),
  recipePreparation: yup
    .string()
    .trim()
    .required('Please enter about a recipe'),
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
  const fileInputRef = useRef();

  const onSubmitForm = (data, action) => {
    data.id = nanoid();
    ownDrink(data)
      .then(() => toast.success('New drink added successfully'))
      .catch(({ message }) => toast.error(`${message}`));

    action.resetForm();
    fileInputRef.current.value = null;
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
        {({ setFieldValue, touched, errors }) => (
          <Form>
            <TitleBlock
              categoriesList={categories.drinkCategories}
              glassesList={glasses.drinkGlasses}
              setValue={setFieldValue}
              errors={errors}
              touched={touched}
              fileInputRef={fileInputRef}
            />
            <IngredientsBlock
              items={ingredients.drinkIngredients}
              title={'Ingridients'}
            />
            <RecipePreparation
              error={errors.recipePreparation}
              touched={touched.recipePreparation}
            />
            <AddButton type="submit">Add</AddButton>
          </Form>
        )}
      </Formik>
    </DrinkFormWrapper>
  );
};

export default FormMain;
