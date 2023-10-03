import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstRecipe: false,
  firstFavorite: false,
  isBirthday: false,
  error: null,
};

const motivationSlice = createSlice({
  name: 'motivation',
  initialState,
  reducers: {
    fetchingFirstRecipeSuccess(state, { payload }) {
      state.error = null;
      state.firstRecipe = payload;
    },
    fetchingFirstRecipeError(state, { payload }) {
      state.error = payload;
    },

    fetchingFirstFavoriteSuccess(state, { payload }) {
      state.error = null;
      state.firstFavorite = payload;
    },
    fetchingFirstFavoriteError(state, { payload }) {
      state.error = payload;
    },
  },
});

export const {
  fetchingFirstRecipeSuccess,
  fetchingFirstRecipeError,
  fetchingFirstFavoriteSuccess,
  fetchingFirstFavoriteError,
} = motivationSlice.actions;

export const motivationReducer = motivationSlice.reducer;
