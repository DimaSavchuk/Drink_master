import { Formik, Form, Field } from 'formik';
import { DrinkMain } from './AddDrinkForm.styled';
import * as yup from 'yup';
import { useState } from 'react';
import AddDrinkIngridients from '../AddDrinkIngridients';

const validationSchema = yup.object();

const initialValues = {
  drinkTitle: '',
  drinkRecipe: '',
  drinkCategory: '',
  drinkGlass: '',
  alcoholicType: '',
  drinkIngridients: '',
};

const testValues = [{ name: '', volume: '1cl' }];

const testIngridients = [
  { name: 'Lem', volume: '1cl' },
  { name: 'Passoa', volume: '1cl' },
  { name: 'Prosecco', volume: '1cl' },
];

const AddDrinkForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <DrinkMain>
          <label htmlFor="drinkTitle">Enter item title</label>
          <Field name={'drinkTitle'} placeholder="Enter item title" />

          <label htmlFor="drinkRecipe">Enter about recipe</label>
          <Field name={'drinkRecipe'} placeholder="Enter about recipe" />

          <label htmlFor="drinkCategory">Category</label>
          <Field
            as="select"
            name="drinkCategory"
            placeholder="Category"
          ></Field>

          <label htmlFor="drinkGlass">Glass</label>
          <Field as="select" name="drinkGlass" placeholder="Glass"></Field>

          <div
            role="cocktailTypeSelect"
            aria-labelledby="cocktailTypeSelect-group"
          >
            <label>
              <Field type="radio" name="alcoholicType" value="true" />
              Alcoholic
            </label>
            <label>
              <Field type="radio" name="alcoholicType" value="false" />
              Non-alcoholic
            </label>
          </div>
        </DrinkMain>

        <AddDrinkIngridients />

        <div>
          <h3>Recipe Preparation</h3>
          <Field
            name="drinkRecipePreparation"
            placeholder="Enter the recipe"
            as="textarea"
          />
        </div>

        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default AddDrinkForm;
