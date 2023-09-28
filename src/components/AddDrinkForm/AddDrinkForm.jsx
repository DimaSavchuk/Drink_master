import { Formik, Form, Field } from 'formik';
import AddDrinkIngredients from '../AddDrinkIngredients';
import AddDrinkTitle from '../AddDrinkTitle';
import AddDrinkRecipePrep from '../AddDrinkResipePrep/AddDrinkRecipePrep';
import { ownDrink } from '../../services/axiosConfig';
import { AddButton } from './AddDrinkForm.styled';
import { nanoid } from '@reduxjs/toolkit';
import * as yup from 'yup';

const validationSchema = yup.object();

const initialValues = {
  title: 'TEST TITLE',
  recipe: 'TEST RECIPE',
  category: 'Other/Unknown',
  glass: 'Whiskey Glass',
  alcoholicType: 'Non-alcoholic',
  ingridients: [],
  file: '',
  recipePreparation: '',
};

const AddDrinkForm = () => {
  // const onSubmitForm = (data, action) => {
  //   data.id = nanoid();
  //   ownDrink(data);
  //   action.resetForm();
  // };

  const addToBack = (data) => {
    data.id = nanoid();
    // console.log(ownDrink);
    // ownDrink(data);
    console.log(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={addToBack}
    >
      {({ setFieldValue }) => {
        return (
          <Form>
            <AddDrinkTitle setValue={setFieldValue} />
            <AddDrinkIngredients />
            <AddDrinkRecipePrep />

            <AddButton type="submit">Add</AddButton>
          </Form>
        );
      }}
    </Formik>
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
