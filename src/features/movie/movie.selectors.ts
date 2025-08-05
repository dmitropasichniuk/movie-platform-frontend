import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { DEFAULT_MOVIE_FILTERS } from "../../shared/constants";

export const selectMovieState = (state: RootState) => state.movie;

export const selectAllMovies = createSelector(
  [selectMovieState],
  (movieState) => movieState.data?.results || []
);

export const selectIsGetMovieLoading = createSelector(
  [selectMovieState],
  (movieState) => movieState.loading
);

export const selectMovieError = createSelector(
  [selectMovieState],
  (movieState) => movieState.error
);

export const selectIsMoviesLoaded = createSelector(
  [selectMovieState],
  (movieState) => movieState.isMovieLoaded
);

export const selectMovieBackdrop = createSelector(
  [selectMovieState],
  (movieState) => movieState.backdropUrl
);

export const selectMovieByExternalId = (id: number) =>
  createSelector([selectAllMovies], (movies) =>
    movies.find((m) => m.externalId === id)
  );

export const selectSingleMovie = createSelector(
  [selectMovieState],
  (movieState) => movieState.singleMovie
);

export const selectIsTrailerLoading = createSelector(
  [selectMovieState],
  (movieState) => movieState.isTrailerLoading
);

export const selectTrailerError = createSelector(
  [selectMovieState],
  (movieState) => movieState.trailerError
);

export const selectMoviePaginationInfo = createSelector(
  [selectMovieState],
  (movieState) => ({
    total: movieState.data?.total ?? 0,
    page: movieState.data?.page ?? 1,
    limit: movieState.data?.limit ?? DEFAULT_MOVIE_FILTERS.limit,
    totalPages: movieState.data?.totalPages ?? 1,
    hasNext: movieState.data?.hasNext ?? false,
    hasPrev: movieState.data?.hasPrev ?? false,
  })
);

export const selectMovieFilterInfo = createSelector(
  [selectMovieState],
  (movieState) => ({
    limit: movieState.filters?.limit ?? DEFAULT_MOVIE_FILTERS.limit,
    page: movieState.filters?.page,
    search: movieState.filters?.search,
    genreIds: movieState.filters?.genreIds,
    releaseYear: movieState.filters?.releaseYear,
    adult: movieState.filters?.adult,
    sortBy: movieState.filters?.sortBy,
    order: movieState.filters?.order,
  })
);
