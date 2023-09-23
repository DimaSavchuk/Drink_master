import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGM4MDQyNmMzYzA5YWJkODQ4ZTU5MCIsImlhdCI6MTY5NTQ1ODk2NiwiZXhwIjoxNjk1NTMwOTY2fQ.Z_Y5FfFKqtr2ChRJq5PCVDshvuYSnXI1OsvHcP-9CTA';
axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getDrinkId = async (movieId, controller) => {
  const { data } = await axios.get(`/drinks/${movieId}`, {
    signal: controller.signal,
  });
  return data;
};
