import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const deleteToken = () => {
//   axios.defaults.headers.common.Authorization = '';
// };


export const signUpUser = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      setToken(data.token);
      return data;
    } catch ({ response }) {
      const { status } = response;
      return rejectWithValue(status);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/signin', credentials);
      setToken(res.data.token);
      return res.data;
    } catch ({response}) {
      const { status } = response;
      return rejectWithValue(status);
    }
  }
);
