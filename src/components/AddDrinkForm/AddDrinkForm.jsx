import { Formik, Form, Field } from 'formik';
import AddDrinkIngridients from '../AddDrinkIngridients';
import AddDrinkTitleInfo from '../AddDrinkTitle/AddDrinkTitleInfo';
import { nanoid } from '@reduxjs/toolkit';
import * as yup from 'yup';

const validationSchema = yup.object();

const initialValues = {
  title: '',
  recipe: '',
  category: '',
  glass: '',
  alcoholicType: 'Non-alcoholic',
  ingridients: [],
};

const AddDrinkForm = () => {
  const onSubmitForm = (data, action) => {
    data.id = nanoid();
    console.log(data);

    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {(formikProps) => {
        console.log(formikProps);
        return (
          <Form>
            <AddDrinkTitleInfo />
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
        );
      }}
    </Formik>
  );
};

export default AddDrinkForm;
