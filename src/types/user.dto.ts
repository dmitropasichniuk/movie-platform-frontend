import type { UserRole } from "../features/user/enum/user.enum";

export interface UserDto {
  id: string;
  userName: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  phone?: string;
  age?: number;
  avatar?: string;
  fullName?: string;
}

export interface UpdateUserDto {
  userName?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  age?: number | null;
}

export type UpdateUserArgs = {
  id: string;
  data: UpdateUserDto;
};
