import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { storage } from "../../services";
import type { UserDto } from "../../types";
import { clearUsers } from "../user";
import { registerUser, loginUser, getProfile } from "./auth.api";
import { login, logout } from "./auth.slice";
import type {
  RegisterRequestDto,
  AuthUserResponseDto,
  LoginRequestDto,
} from "./dto";

export const registerUserThunk = createAsyncThunk(
  "user/register",
  async (data: RegisterRequestDto): Promise<AuthUserResponseDto> => {
    return await registerUser(data);
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/login",
  async (data: LoginRequestDto): Promise<AuthUserResponseDto> => {
    return await loginUser(data);
  }
);

export const autoLoginThunk = createAsyncThunk<
  { user: UserDto },
  void,
  { rejectValue: string }
>("auth/autoLogin", async (_, { dispatch, rejectWithValue }) => {
  const token = storage.get("accessToken");

  if (!token) return rejectWithValue("No token");

  try {
    const user = await getProfile();
    if (!user) return rejectWithValue("User not found");

    dispatch(login({ token }));
    return { user };
  } catch (err: unknown) {
    storage.remove("accessToken");
    dispatch(logout());
    dispatch(clearUsers());

    let message = "Unknown error";

    if (axios.isAxiosError(err)) {
      message = err.response?.data?.message ?? err.message;
    } else if (err instanceof Error) {
      message = err.message;
    }

    return rejectWithValue(message);
  }
});
