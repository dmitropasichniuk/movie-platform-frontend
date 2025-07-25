import { api } from "../../app/axios";
import type { UserDto } from "../../types";

import type {
  RegisterRequestDto,
  LoginRequestDto,
  AuthUserResponseDto,
} from "./dto";

export const registerUser = async (
  data: RegisterRequestDto
): Promise<AuthUserResponseDto> => {
  const response = await api.post("/auth/register", data);
  return response.data.data;
};

export const loginUser = async (
  data: LoginRequestDto
): Promise<AuthUserResponseDto> => {
  const response = await api.post("/auth/login", data);
  return response.data.data;
};

export const getProfile = async (): Promise<UserDto> => {
  const response = await api.get("/auth/me");
  return response.data.data;
};
