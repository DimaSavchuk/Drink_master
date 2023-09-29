export const selectUserName = (state) => state.auth.user?.name;

export const selectUserEmail = (state) => state.auth.user?.email;
export const selectIsLoading = (state) => state.auth.user?.isLoading;

export const selectAvatarURL = (state) => state.auth.user.avatarURL;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsFetchingCurrent = (state) => state.auth.isfetchingCurrent;
