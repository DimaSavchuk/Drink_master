import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';



const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZmYzVhZjhhMWE4NjA3OTNmNjk4ZCIsImlhdCI6MTY5NTcxMTI2MiwiZXhwIjoxNjk1NzgzMjYyfQ.m9hWihFtZvpIEwTtwSIoDDgKjz8OCuQ7E9dxG0_w6ro';

// const accessToken =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGZmYzVhZjhhMWE4NjA3OTNmNjk4ZCIsImlhdCI6MTY5NTU0NjQ5MiwiZXhwIjoxNjk1NjE4NDkyfQ.OgISC0-7XR70ndKat_FS4nPjHabm9DTL12Gwb4wTWek';
axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

export const fetchFavoriteDrinks = async () => {
  try {
    const response = await axios.get('/drinks/favorite', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const deleteDrinkFromFavorite = async (_id) => {
  console.log(_id);
  try {
    const response = await axios.delete('/drinks/favorite/remove', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        recipeId: _id,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const addDrinkToFavorite = async (_id) => {
  // console.log(_id);
  try {
    const response = await axios.post('/drinks/favorite/add', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        recipeId: _id,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const getDrinkId = async (movieId, controller) => {
  const { data } = await axios.get(`/drinks/byid/${movieId}`, {
    signal: controller.signal,
  });
  return data;
};

// export const ownDrink = createAsyncThunk(`/drinks/own/add`, async (data) => {
//   console.log('ВИКЛИК МЕТОДУ');
//   try {
//     const response = await axios.post('/drinks/own/add', {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//       data: {
//         data,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Помилка при відправленні даних:', error);
//   }
// });

export const ownDrink = async (data) => {
  const formData = new FormData();
  formData.append('file', data.file);

  const response = await axios.post('/drinks/own/add', formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log(formData);
  return response.formData;
};

export const fetchOwnDrinks = async () => {
  try {
    const response = await axios.get('/drinks/own', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const deleteDrinkFromOwn = async (_id) => {
  try {
    const response = await axios.delete('/drinks/own/remove', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        recipeId: _id,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const fetchAllDrinks = async ({ page, limit }) => {
  try {
    const response = await axios.get('/drinks/mainpage', {
      params: {
        page,
        limit,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних про всі коктейлі: ', error);
  }
};

export const fetchCategories=async () => {
  try {
    const response = await axios.get('/filters/categories');
    return response.data.categories;
  } catch (error) {
    console.error('Помилка при отриманні даних про категорії: ', error);
  }
};

export const fetchIngredients=async () => {
  try {
    const response = await axios.get('/filters/ingredients');
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних про категорії: ', error);
  }
};

export const fetchHomePageCocktails=async () => {
  try {
    const response = await axios.get('/drinks/homepage');
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних на головну сторінку: ', error);
  }
};
