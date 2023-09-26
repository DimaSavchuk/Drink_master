export const selectUser = (state) => state.auth.user;
export const selectUserArray = (state) => state.userInfo.user;
export const selectAuthAccessToken = state => state.auth.accessToken;
export const selectUserLoading = state => state.auth.loading;