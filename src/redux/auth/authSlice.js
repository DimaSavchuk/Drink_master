import { createSlice } from '@reduxjs/toolkit';
// import {
//   signUpUser,
//   logInUser,
//   logOut,
// } from './authOperations';

import { logInUser, signUpUser } from './authOperations';

console.log(signUpUser);

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
        console.log('state=>', state);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.user);
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
        console.log(state);
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // .addCase(logOut.fulfilled, (state) => {
      //   state.user = { name: '', email: '' };
      //   state.token = null;
      //   state.isLoggedIn = false;
      // })
      // .addCase(logOut.rejected, (state, action) => {
      //   state.error = action.payload;
      // }),
  //   .addCase(fetchCurrentUser.pending, (state) => {
  //     state.isfetchingCurrent = true;
  //   })
  //   .addCase(fetchCurrentUser.fulfilled, (state, action) => {
  //     state.user = action.payload;
  //     state.isLoggedIn = true;
  //     state.isfetchingCurrent = false;
  //   })
  //   .addCase(fetchCurrentUser.rejected, (state, action) => {
  //     state.isfetchingCurrent = false;
  //     state.error = action.payload;
  //   }),
});

export const authReducer = authSlice.reducer;
