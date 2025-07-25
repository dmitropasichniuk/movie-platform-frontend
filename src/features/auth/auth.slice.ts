import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { UserDto } from "../../types";
import {
  registerUserThunk,
  loginUserThunk,
  autoLoginThunk,
} from "./auth.thunks";

interface AuthState {
  currentUser: UserDto | null;
  isAuthenticated: boolean;
  accessToken: string | null;
  showAuthModal: boolean;
  isUserRegisterLoading: boolean;
  isUserLoginLoading: boolean;
  authInitialized: boolean;
  error: string | null;
}

const initialState: AuthState = {
  currentUser: null,
  accessToken: null,
  isAuthenticated: false,
  showAuthModal: false,
  isUserRegisterLoading: false,
  isUserLoginLoading: false,
  authInitialized: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.accessToken = action.payload.token;
    },
    logout(state) {
      state.accessToken = null;
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    setShowAuthModal: (state, action: PayloadAction<boolean>) => {
      state.showAuthModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // === reisterUser ===
      .addCase(registerUserThunk.pending, (state) => {
        state.isUserRegisterLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.currentUser = action.payload.user;
        state.isAuthenticated = true;
        state.isUserRegisterLoading = false;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isUserRegisterLoading = false;
        state.error = action.error.message ?? "Error";
      })

      // === loginUser ===
      .addCase(loginUserThunk.pending, (state) => {
        state.isUserLoginLoading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.currentUser = action.payload.user;
        state.isAuthenticated = true;
        state.isUserLoginLoading = false;
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.isUserLoginLoading = false;
        state.error = action.error.message ?? "Error";
      })

      // === autoLogin ===
      .addCase(autoLoginThunk.pending, (state) => {
        state.error = null;
      })
      .addCase(autoLoginThunk.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.isAuthenticated = true;
        state.authInitialized = true;
      })
      .addCase(autoLoginThunk.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.currentUser = null;
        state.accessToken = null;
        state.authInitialized = true;
        state.error = action.error.message ?? "Error";
      });
  },
});

export const { login, logout, setShowAuthModal } = authSlice.actions;
export default authSlice.reducer;
