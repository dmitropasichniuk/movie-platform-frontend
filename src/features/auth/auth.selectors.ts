import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectAuthState = (state: RootState) => state.auth;

export const selectIsAuthenticated = createSelector(
  [selectAuthState],
  (auth) => auth.isAuthenticated
);

export const selectCurrentUser = createSelector(
  [selectAuthState],
  (auth) => auth.currentUser
);

export const selectShowAuthModal = createSelector(
  [selectAuthState],
  (auth) => auth.showAuthModal
);

export const selectAuthInitialized = createSelector(
  [selectAuthState],
  (auth) => auth.authInitialized
);

export const selectIsLoginLoading = createSelector(
  [selectAuthState],
  (auth) => auth.isUserLoginLoading
);

export const selectIsRegisterLoading = createSelector(
  [selectAuthState],
  (auth) => auth.isUserRegisterLoading
);
