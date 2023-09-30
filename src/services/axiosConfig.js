import axios from 'axios';

// axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';
// axios.defaults.baseURL = 'http://localhost:3000/api';

export const fetchFavoriteDrinks = async () => {
  try {
    const response = await axios.get('/drinks/favorite');
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const deleteDrinkFromFavorite = async (_id) => {
  // console.log(_id);
  try {
    const response = await axios.delete('/drinks/favorite/remove', {
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
      recipeId: _id,
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const getDrinkId = async (drinkId, controller) => {
  const { data } = await axios.get(`/drinks/${drinkId}`, {
    signal: controller.signal,
  });
  return data;
};

export const fetchOwnDrinks = async () => {
  try {
    const response = await axios.get('/drinks/own');
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const deleteDrinkFromOwn = async (_id) => {
  try {
    const response = await axios.delete('/drinks/own/remove', {
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

export const fetchCategories = async () => {
  try {
    const response = await axios.get('/filters/categories');
    return response.data.categories;
  } catch (error) {
    console.error('Помилка при отриманні даних про категорії: ', error);
  }
};

export const fetchGlasses = async () => {
  try {
    const response = await axios.get('/filters/glasses');
    return response.data.glasses;
  } catch (error) {
    console.error('Помилка при отриманні даних про категорії: ', error);
  }
};

export const fetchIngredients = async () => {
  try {
    const response = await axios.get('/filters/ingredients');
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних про категорії: ', error);
  }
};

export const fetchPopularDrinks = async () => {
  try {
    const response = await axios.get('/drinks/popular');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних: ', error);
  }
};

export const fetchHomePageCocktails = async () => {
  try {
    const response = await axios.get('/drinks/homepage');
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних на головну сторінку: ', error);
  }
};

export const updateUser = async (name) => {
  // console.log(_id);
  try {
    const response = await axios.patch('/users/update', {
      name: name,
      file: 'Bla',
    });
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const getCurrentUser = async () => {
  // console.log(_id);
  try {
    const response = await axios.get('/users/current', {});
    return response.data.data;
  } catch (error) {
    console.error('Помилка при отриманні даних:', error);
  }
};

export const ownDrink = async (data) => {
  console.log(data);

  const newIngredients = JSON.stringify(data.ingredients);

  let formData = new FormData();
  formData.append('cocktail', data.file);
  formData.append('drink', data.title);
  formData.append('category', data.category);
  formData.append('alcoholic', 'Alcoholic');
  formData.append('glass', data.glass);
  formData.append('description', data.recipe);
  formData.append('instructions', data.recipePreparation);
  formData.append('ingredients', newIngredients);

  axios
    .post('/drinks/own/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
