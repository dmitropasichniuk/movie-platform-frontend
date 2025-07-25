import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/user.slice";
import authReducer from "../features/auth/auth.slice";
import movieReducer from "../features/movie/movie.slice";
import genreReducer from "../features/genre/genre.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    movie: movieReducer,
    genre: genreReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});
export const appDispatch = store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
