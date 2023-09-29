export const selectUser = (state) => state.auth;
export const selectUserArray = (state) => state.auth.user;
export const selectAuthAccessToken = state => state.auth.accessToken;
export const selectUserLoading = state => state.auth.loading;