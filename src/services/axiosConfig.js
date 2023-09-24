import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGM4MDQyNmMzYzA5YWJkODQ4ZTU5MCIsImlhdCI6MTY5NTQ1ODk2NiwiZXhwIjoxNjk1NTMwOTY2fQ.Z_Y5FfFKqtr2ChRJq5PCVDshvuYSnXI1OsvHcP-9CTA';

axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGVkODdkOTk5ZWNkYzg3MjZiNTg2MCIsImlhdCI6MTY5NTQ3MjI0MywiZXhwIjoxNjk1NTQ0MjQzfQ.3sjWchvTwKJ_Ap1k-qZhjZu6oqtqZE2VyI_MNcBNWlk';

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
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getDrinkId = async (movieId, controller) => {
  const { data } = await axios.get(`/drinks/byid/${movieId}`, {
    signal: controller.signal,
  });
  return data;
};
