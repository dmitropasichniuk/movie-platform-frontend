import { createSlice } from "@reduxjs/toolkit";

import { getGenresThunk } from "./genre.thunks";
import type { GenreDto } from "./dto/genre.dto";

interface GenreState {
  genres: GenreDto[];
  isGenresLoaded: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: GenreState = {
  genres: [],
  isGenresLoaded: false,
  isLoading: false,
  error: null,
};

const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    clearGenres: (state) => {
      state.genres = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // === fetchGenres ===
      .addCase(getGenresThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGenresThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload;
        state.isGenresLoaded = true;
        state.error = null;
      })
      .addCase(getGenresThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message ?? "Error";
      });
  },
});

export const { clearGenres } = genreSlice.actions;
export default genreSlice.reducer;
