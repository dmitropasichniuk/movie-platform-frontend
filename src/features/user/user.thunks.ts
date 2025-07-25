import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUserById } from ".";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return await getAllUsers();
});

export const fetchUserByExternalId = createAsyncThunk(
  "user/fetchById",
  async (externalId: string) => {
    return await getUserById(externalId);
  }
);
