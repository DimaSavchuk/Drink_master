import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://rest-api-drink-master.onrender.com/api';

const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = ``;
};

export const signUpUser = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      setToken(data.data.token);
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
      return 'LOGIN => ', res.data;
    } catch ({ response }) {
      const { status } = response;
      return rejectWithValue(status);
    }
  },
);

export const logoutUser = createAsyncThunk('auth/signout', async () => {
  try {
    const res = await axios.post('auth/signout');
    clearToken();
    return res.status;
  } catch ({ response }) {
    const { status } = response;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    if (token === null) {
      return rejectWithValue();
    }
    setToken(token);
    try {
      const {
        data: { data },
      } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
