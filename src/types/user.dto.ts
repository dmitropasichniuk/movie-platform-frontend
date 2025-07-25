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
  userName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  age?: number;
  avatar?: string;
}
