import { api } from "../../app/axios";
import type { UpdateUserDto, UserDto } from "../../types";

export const getAllUsers = async (): Promise<UserDto[]> => {
  const response = await api.get("/users");
  return response.data.data.data;
};

export const getUserById = async (id: string): Promise<UserDto> => {
  const response = await api.get(`/users/${id}`);
  return response.data.data;
};

export const updateUser = async (
  id: string,
  data: UpdateUserDto
): Promise<UserDto> => {
  const response = await api.put(`/users/${id}`, data);
  return response.data.data;
};
