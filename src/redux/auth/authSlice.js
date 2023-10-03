import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logInUser,
  logoutUser,
  signUpUser,
} from './authOperations';
import {
  getCurrentUserThunk,
  updateUserThunk,
} from '../UserInfo/userOperations';

const initialState = {
  user: { name: '', avatarURL: '', email: '' },
  token: null,
  isLoggedIn: false,
  isfetchingCurrent: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearState: (state) => {
      state.user = { name: '', avatarURL: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
      state.isfetchingCurrent = false;
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user.name = action.payload.data.name;
        state.user.email = action.payload.data.email;
        state.user.avatarURL = action.payload.data.avatarURL;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logInUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = { name: '', avatarURL: '', email: '' };

        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.data.name;
        state.user.avatarURL = action.payload.data.avatarURL;
        state.isLoading = false;
      })
      .addCase(updateUserThunk.rejected, (state, payload) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, payload) => {
        state.user = {
          name: payload.name,
          email: payload.email,
          avatarURL: payload.avatarURL,
          id: payload._id,
        };
        state.firstRender = false;
        state.theme = payload.theme;
        state.isLoading = false;
      })
      .addCase(getCurrentUserThunk.rejected, (state, payload) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.avatarURL = payload.user.avatarURL;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      }),
});

export const authReducer = authSlice.reducer;
export const { clearState } = authSlice.actions;
