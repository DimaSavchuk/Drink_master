import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { allusion } from '../../api/allusion';

export const updateUserThunk = createAsyncThunk(
  'users/update',
  async (data, { rejectWithValue }) => {
    try {
      let res = null;
      if (data.avatarURL) {
        res = await axios.patch(
          'users/update',
          { name: data.name, avatar: data.avatarURL },
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          },
        );
      } else {
        res = await axios.patch('users/update', { name: data.name });
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  },
);

export const getCurrentUserThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  },
);
