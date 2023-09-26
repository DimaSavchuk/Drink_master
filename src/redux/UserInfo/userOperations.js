import { createAsyncThunk } from '@reduxjs/toolkit';
import { allusion } from '../../api/allusion';
import Notiflix from 'notiflix';

export const updateThemeThunk = createAsyncThunk(
  '@@userInfo/theme',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await allusion.patch('users/theme', payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  '@@userInfo/update',
  async (data, { rejectWithValue }) => {
    try {
      let res = null;
      if (data.get('avatarURL')) {
        res = await allusion.patch('users/update', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        res = await allusion.patch('users/update', data);
      }
      Notiflix.Notify.success('User inform was updated');
      return res.data;
    } catch (error) {
      const errorMessage = error.response.data.message;
      Notiflix.Notify.failure('Respond from server is ' + errorMessage);
      return rejectWithValue(error.response.status);
    }
  }
);

export const getCurrentUserThunk = createAsyncThunk(
  '@@userInfo/current',
  async (_, { rejectWithValue }) => {
    try {
      const res = await allusion.get('users/current');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);