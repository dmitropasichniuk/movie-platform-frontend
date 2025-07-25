import axios from "axios";
import { omit } from "lodash";
import { unwrapResult } from "@reduxjs/toolkit";

import type { LoginSchemaType, RegisterSchemaType } from "./schemas";
import type { RegisterRequestDto } from "./dto";
import type { AppDispatch } from "../../app/store";
import { clearUsers } from "../user";
import { logout, setShowAuthModal } from "./auth.slice";
import { registerUserThunk, loginUserThunk } from "./auth.thunks";
import { useAppDispatch } from "../../app/hooks";
import { globalNavigate } from "../../app/navigation";
import { NotificationService, storage } from "../../services";

export const useRegisterHandler = () => {
  const dispatch = useAppDispatch();

  return async (data: RegisterSchemaType) => {
    try {
      const submitData: RegisterRequestDto = {
        ...omit(data, ["confirmPassword"]),
      };

      const action = await dispatch(registerUserThunk(submitData));
      const result = unwrapResult(action);
      setAccessToken(result.accessToken);
      dispatch(setShowAuthModal(false));
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        NotificationService.error(
          "Помилка реєстрації: " + (err.response?.data?.message || "невідома")
        );
      } else {
        NotificationService.error("Сталася невідома помилка");
      }
    }
  };
};

export const useLoginHandler = () => {
  const dispatch = useAppDispatch();

  return async (data: LoginSchemaType) => {
    try {
      const action = await dispatch(loginUserThunk(data));
      const result = unwrapResult(action);
      setAccessToken(result.accessToken);
      dispatch(setShowAuthModal(false));
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        NotificationService.error(
          "Помилка реєстрації: " + (err.response?.data?.message || "невідома")
        );
      } else {
        NotificationService.error("Сталася невідома помилка");
      }
    }
  };
};

export const setAccessToken = (token: string) => {
  storage.set("accessToken", token);
};

export const handleLogout =
  (showAuthModal: boolean = false) =>
  (dispatch: AppDispatch) => {
    globalNavigate("/");
    storage.remove("accessToken");

    dispatch(logout());
    dispatch(clearUsers());

    if (showAuthModal) {
      dispatch(setShowAuthModal(true));
    }
  };
