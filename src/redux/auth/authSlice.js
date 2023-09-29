import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logoutUser, signUpUser } from './authOperations';
import {
  getCurrentUserThunk,
  // updateThemeThunk,
  updateUserThunk,
} from '../UserInfo/userOperations';
import { Loading } from 'notiflix/build/notiflix-loading-aio';



const initialState = {
  user: { name: '', avatarURL: '', email: '' },
  token: null,
  isLoggedIn: false,
  isfetchingCurrent: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
        clearState: state => {
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
        console.log("login", action.payload.user, action.payload)
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log(state);
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
        state.user = { name: '', avatarURL: '', email: '' }

        state.token = null;
        state.isLoggedIn = false;
        console.log(state);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
        Loading.hourglass('We are validating your data...');
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        console.log(action.payload, state.user);
        state.user.name = action.payload.data.name;
        state.user.avatarURL = action.payload.data.avatarURL;
        state.loading = false;
        Loading.remove();
      })
      .addCase(updateUserThunk.rejected, (state,  payload ) => {
        state.error = payload;
        state.loading = false;
        Loading.remove();
      })
      .addCase(getCurrentUserThunk.pending, (state) => {
        state.loading = true;
        Loading.hourglass('We are validating your data...');
      })
  .addCase(getCurrentUserThunk.fulfilled, (state,  payload ) => {
        state.user = {
          name: payload.name,
          email: payload.email,
          avatarURL: payload.avatarURL,
          id: payload._id,
        };
        state.firstRender = false;
        state.theme = payload.theme;
        state.loading = false;
        Loading.remove();
      })
      .addCase(getCurrentUserThunk.rejected, (state,  payload) => {
        state.error = payload;
        state.loading = false;
        Loading.remove();
      })  
});

export const authReducer = authSlice.reducer;
export const { clearState } = authSlice.actions;

