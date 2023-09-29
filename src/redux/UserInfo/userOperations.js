import { createAsyncThunk } from '@reduxjs/toolkit';
import { allusion } from '../../api/allusion';

export const updateUserThunk = createAsyncThunk(
  'users/update',
  async (data, { rejectWithValue }) => {
    try {
      let res = null;
      console.log("NB", data, data.avatarURL);
      if (data.avatarURL) {
        res = await allusion.patch('users/update', 
        { name: data.name,
          avatar: data.avatarURL }, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        res = await allusion.patch('users/update', { name: data.name });
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  'users/current',
  async (_, { rejectWithValue }) => {
    try {
      const res = await allusion.get('users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);