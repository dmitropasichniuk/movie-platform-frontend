import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { MovieDto, MovieFilterDto, MoviePaginatedState } from "./dto";
import {
  getMovieByIdThunk,
  getMoviesThunk,
  getMovieTrailerThunk,
} from "./movie.thunks";
import { DEFAULT_MOVIE_FILTERS } from "../../shared/constants";

const defaultFilters: MovieFilterDto = DEFAULT_MOVIE_FILTERS;

const initialState: MoviePaginatedState<MovieDto[], MovieFilterDto> = {
  data: null,
  singleMovie: null,
  loading: false,
  error: null,
  filters: defaultFilters,
  isMovieLoaded: false,
  backdropUrl: undefined,
  isTrailerLoading: false,
  trailerError: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    clearMovie(state) {
      state.data = null;
    },
    clearSingleMovie(state) {
      state.singleMovie = null;
    },
    updateFilters(state, action: PayloadAction<MovieFilterDto>) {
      state.filters = action.payload;
    },
    resetFilters(state) {
      state.filters = { ...defaultFilters };
    },
    setBackdropUrl(state, action: PayloadAction<string | undefined>) {
      state.backdropUrl = action.payload;
    },
    clearTrailerError: (state) => {
      state.trailerError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // === getMovies ===
      .addCase(getMoviesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMoviesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isMovieLoaded = true;
        state.error = null;
      })
      .addCase(getMoviesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error";
      })

      // === getMovieById ===
      .addCase(getMovieByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.singleMovie = action.payload;
      })
      .addCase(getMovieByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error";
      })

      // === getTrailer ===
      .addCase(getMovieTrailerThunk.pending, (state) => {
        state.isTrailerLoading = true;
        state.trailerError = null;
      })
      .addCase(getMovieTrailerThunk.fulfilled, (state, action) => {
        state.isTrailerLoading = false;
        state.trailerError = null;

        const videoId = action.payload.videoId;
        const movieId = action.meta.arg;

        state.data?.results.forEach((movie) => {
          if (movie.externalId === movieId) {
            movie.videoId = videoId;
          }
        });
      })
      .addCase(getMovieTrailerThunk.rejected, (state, action) => {
        state.isTrailerLoading = false;
        state.trailerError = action.error.message ?? "Error";
      });
  },
});

export const {
  clearMovie,
  clearSingleMovie,
  updateFilters,
  resetFilters,
  setBackdropUrl,
  clearTrailerError,
} = movieSlice.actions;
export default movieSlice.reducer;
