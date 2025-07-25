import type { UserDto } from "../../../types";

export interface RegisterRequestDto {
  userName: string;
  email: string;
  password: string;
}

export interface LoginRequestDto {
  userName: string;
  password: string;
}

export interface AuthUserResponseDto {
  accessToken: string;
  user: UserDto;
}
