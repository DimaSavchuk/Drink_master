import { useEffect } from 'react';
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
  ingredients: yup.array().length(1, 'must have more than 1 item').required(),
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
  file: '',
  recipePreparation: '',
};

const AddDrinkForm = () => {
  // const onSubmitForm = (data, action) => {
  //   data.id = nanoid();
  //   ownDrink(data);
  //   action.resetForm();
  // };

  const onSubmitForm = (data, action) => {
    data.id = nanoid();
    // console.log(ownDrink);
    // ownDrink(data);
    console.log(data);
    action.resetForm();
  };

  // useEffect = () => {}, [];

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

// import { Formik, Form, Field } from 'formik';
// import AddDrinkIngredients from '../AddDrinkIngredients';
// import AddDrinkTitleInfo from '../AddDrinkTitle/AddDrinkTitleInfo';
// import { nanoid } from '@reduxjs/toolkit';
// import * as yup from 'yup';
// import { ownDrink } from '../../services/axiosConfig';
// import axios from 'axios';

// ownDrink(data);

// const AddDrinkForm = () => {
//   return (
//     <Formik
//       initialValues={{
//         profile: [],
//       }}
//       validationSchema={yup.object({
//         profile: yup.array().min(1, 'select at least 1 file'),
//       })}
//       onSubmit={(values, props) => {
//         let data = new FormData();
//         values.profile.forEach((photo, index) => {
//           data.append(`cocktail`, values.profile[index]);
//           data.append('drink', 'My drink');
//           data.append('tags', 'My drink');
//           data.append('catergory', 'My drink');
//           data.append('alcoholic', 'My drink');
//           data.append('glass', 'My drink');
//           data.append('description', 'My drink');
//           data.append('instructions', 'My drink');
//           data.append('instructionsUK', 'My drink');
//           data.append(
//             'ingredients',
//             '[{"title" : "whisky", "measure":"10 oz.", "ingredientId":"64aebb7f82d96cc69e0eb4fa"}]',
//           );
//           data.append('shortDescription', 'test');
//         });
//         axios
//           .post('http://localhost:3000/api/drinks/own/add', data, {
//             headers: {
//               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTA0NWMwNzIzNzU3NTE5NjgxYjYzZSIsImlhdCI6MTY5NTU4Mjg4NCwiZXhwIjoxNjk1NjU0ODg0fQ.lvAtnoTN01GcptxU3D0YnBHtJ234a06r6Zv_uJBY72A`,
//               'Content-Type': 'multipart/form-data',
//             },
//           })
//           .then((response) => {
//             console.log(response);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }}
//     >
//       {(formik) => {
//         return (
//           <Form>
//             <input
//               id="file"
//               name="profile"
//               type="file"
//               onChange={(event) => {
//                 const file = event.target.files;
//                 let myFiles = file;
//                 console.log(myFiles);
//                 formik.setFieldValue('cocktail', myFiles);
//               }}
//               multiple
//             />
//             <button type="submit">Add</button>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// };

// export default AddDrinkForm;
