import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectUserState = (state: RootState) => state.user;

export const selectAllUsers = createSelector(
  [selectUserState],
  (userState) => userState.users
);
export const selectUserById = (id: string) =>
  createSelector([selectAllUsers], (users) => users.find((u) => u.id === id));

export const selectGetUserLoading = createSelector(
  [selectUserState],
  (user) => user.isGetUserLoding
);
export const selectGetAllUsersLoading = createSelector(
  [selectUserState],
  (user) => user.isGetAllUsersLoding
);
export const selectUserError = createSelector(
  [selectUserState],
  (user) => user.error
);

export const selectUpdateUserLoading = createSelector(
  [selectUserState],
  (user) => user.updateLoading
);

// Example of a selector that filters users and use createSelector for performance
export const selectUsersWithPhoneNumber = createSelector(
  [selectAllUsers],
  (users) => users.filter((user) => user?.phone)
);
