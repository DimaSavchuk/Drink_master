import axios from 'axios';

export const allusion = axios.create({
  baseURL: 'https://rest-api-drink-master.onrender.com/api',
  // baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});
