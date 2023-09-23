import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';

export const getDrinkId = async (movieId, controller) => {
  const { data } = await axios.get(`/drinks/${movieId}`, {
    signal: controller.signal,
  });
  return data;
};
