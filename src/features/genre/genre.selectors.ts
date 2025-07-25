import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export const selectGenreState = (state: RootState) => state.genre;

export const selectAllGenres = createSelector(
  [selectGenreState],
  (genreState) => genreState.genres
);

export const selectGenresLoading = createSelector(
  [selectGenreState],
  (genreState) => genreState.isLoading
);

export const selectIsGenresLoaded = createSelector(
  [selectGenreState],
  (genreState) => genreState.isGenresLoaded
);

export const selectGenresError = createSelector(
  [selectGenreState],
  (genreState) => genreState.error
);
