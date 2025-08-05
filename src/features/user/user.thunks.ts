import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsers, getUserById, updateUser } from ".";
import type { UpdateUserArgs, UserDto } from "../../types";

export const fetchUsers = createAsyncThunk<UserDto[]>(
  "user/fetchUsers",
  async () => {
    return await getAllUsers();
  }
);

export const fetchUserByExternalId = createAsyncThunk<UserDto, string>(
  "user/fetchById",
  async (externalId: string) => {
    return await getUserById(externalId);
  }
);

export const updateUserThunk = createAsyncThunk<UserDto, UpdateUserArgs>(
  "user/update",
  async ({ id, data }: UpdateUserArgs) => {
    return await updateUser(id, data);
  }
);
