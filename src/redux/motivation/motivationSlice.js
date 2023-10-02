import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstRecipe: false,
  firstFavorite: false,
  isBirthday: false,
  isLoading: false,
  error: null,
};

const motivationSlice = createSlice({
  name: 'motivation',
  initialState,
  reducers: {
    fetchingInProgress(state) {},
    fetchingFirstRecipeSuccess(state, { payload }) {
      state.error = null;
      state.firstRecipe = payload;
    },
    fetchingFirstRecipeError(state, { payload }) {
      state.error = payload;
    },
  },
});

export const {
  fetchingInProgress,
  fetchingFirstRecipeSuccess,
  fetchingFirstRecipeError,
} = motivationSlice.actions;

export const motivationReducer = motivationSlice.reducer;
