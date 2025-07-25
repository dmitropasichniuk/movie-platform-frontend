import { createSlice } from "@reduxjs/toolkit";
import type { UserDto } from "../../types";
import { fetchUsers, fetchUserByExternalId } from "./user.thunks";

interface UserState {
  users: UserDto[];
  isGetUserLoding: boolean;
  isGetAllUsersLoding: boolean;
  // updateLoading: boolean; added later if needed
  // deleteLoading: boolean; added later if needed
  error: string | null;
}

const initialState: UserState = {
  users: [],
  isGetUserLoding: false,
  isGetAllUsersLoding: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // === fetchUsers ===
      .addCase(fetchUsers.pending, (state) => {
        state.isGetAllUsersLoding = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isGetAllUsersLoding = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isGetAllUsersLoding = false;
        state.error = action.error.message ?? "Error";
      })

      // === fetchUserById ===
      .addCase(fetchUserByExternalId.pending, (state) => {
        state.isGetUserLoding = true;
        state.error = null;
      })
      .addCase(fetchUserByExternalId.fulfilled, (state, action) => {
        state.isGetUserLoding = false;
        const updatedUser = action.payload;
        const index = state.users.findIndex(
          (user) => user.id === updatedUser.id
        );

        if (index !== -1) {
          state.users[index] = updatedUser;
        } else {
          state.users.push(updatedUser);
        }
      })
      .addCase(fetchUserByExternalId.rejected, (state, action) => {
        state.isGetUserLoding = false;
        state.error = action.error.message ?? "Error";
      });
  },
});

export const { clearUsers } = userSlice.actions;
export default userSlice.reducer;
