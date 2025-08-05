import axios from "axios";

import { appDispatch } from "./store";
import { handleLogout } from "../features/auth/auth.handlers";
import { NotificationService, storage } from "../services";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = storage.get("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      NotificationService.error(
        "You have been logged out. Please log in again."
      );
      appDispatch(handleLogout(true));
    } else if (status >= 400 && status < 600) {
      const message = error.response?.data?.message || "An error occurred";
      NotificationService.error(message);
    }

    return Promise.reject(error);
  }
);
