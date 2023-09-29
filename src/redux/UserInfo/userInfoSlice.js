// import { createSlice } from '@reduxjs/toolkit';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import {
//     getCurrentUserThunk,
//     // updateThemeThunk,
//     updateUserThunk,
// } from './userOperations';

// const initialState = {
//   user: { name: '', email: '', avatarURL: '' },
//   firstRender: true,
// };

// const userInfoSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     clearState: state => {
//       state.user = { name: '', email: '', avatarURL: '' };
//       state.firstRender = true;
//     },
//   },
//   extraReducers: (builder) => 
//   builder.addCase(updateUserThunk.pending, (state) => {
//       state.loading = true;
//       Loading.hourglass('We are validating your data...');
//     })
//     .addCase(updateUserThunk.fulfilled, (state, payload) => {
//       console.log(payload, state.user);
//       state.user.name = payload.data.name;
//       state.user.avatarURL = payload.data.avatarURL;
//       state.loading = false;
//       Loading.remove();
//     })
//     .addCase(updateUserThunk.rejected, (state,  payload ) => {
//       state.error = payload;
//       state.loading = false;
//       Loading.remove();
//     })
//     .addCase(getCurrentUserThunk.pending, (state) => {
//       state.loading = true;
//       Loading.hourglass('We are validating your data...');
//     })
// .addCase(getCurrentUserThunk.fulfilled, (state,  payload ) => {
//       state.user = {
//         name: payload.name,
//         email: payload.email,
//         avatarURL: payload.avatarURL,
//         id: payload._id,
//       };
//       state.firstRender = false;
//       state.theme = payload.theme;
//       state.loading = false;
//       Loading.remove();
//     })
//     .addCase(getCurrentUserThunk.rejected, (state,  payload) => {
//       state.error = payload;
//       state.loading = false;
//       Loading.remove();
//     })
//   },
// );

// export const userInfoReducer = userInfoSlice.reducer;
// export const { clearState } = userInfoSlice.actions;

