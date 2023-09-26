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
      console.log(credentials);
      const { data } = await axios.post('/auth/signup', credentials);
      console.log(data);
      setToken(data.token);
      return data;
    } catch ({ response }) {
      console.log(response);
      const { status } = response;
      console.log(status);
      return rejectWithValue(status);
    }
  },
);

export const logInUser = createAsyncThunk(
  'auth/signin',
  async (credentials, { rejectWithValue }) => {
    try {
            console.log(credentials);

      const res = await axios.post('/auth/signin', credentials);
            console.log(res);

      setToken(res.data.token);
      return res.data;
    } catch ({response}) {
      const { status } = response;
      return rejectWithValue(status);
    }
  }
);

// export const logOut = createAsyncThunk(
//   'auth/signout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await axios.post('/auth/signout');
//       deleteToken();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


// export const fetchCurrentUser = createAsyncThunk(
//   'auth/fetchCurrentUser',
//   async (_, { rejectWithValue, getState }) => {
//     const token = getState().auth.token;
//     if (token === null) {
//       return rejectWithValue();
//     }
//     setToken(token);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
