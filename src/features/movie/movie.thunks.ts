import { createAsyncThunk } from "@reduxjs/toolkit";

import type { MovieDto, MovieFilterDto, MovieTrailerResponseDto } from "./dto";
import { getMovieById, getMovies, getMovieTrailer } from "./movie.api";
import type { PaginatedResponseDto } from "../../shared/dto";
import { updateFilters } from "./movie.slice";
import { mergeFiltersWithResetPage } from "./movie.handlers";
import type { RootState } from "../../app/store";

export const getMoviesThunk = createAsyncThunk(
  "movies/fetchMovies",
  async (
    filters: MovieFilterDto
  ): Promise<PaginatedResponseDto<MovieDto[]>> => {
    return await getMovies(filters);
  }
);

export const applyFiltersThunk = createAsyncThunk<
  void,
  Partial<MovieFilterDto>
>("movies/applyFilters", async (changes, { dispatch, getState }) => {
  const state = getState() as RootState;
  const currentFilters = state.movie.filters;
  const updatedFilters = mergeFiltersWithResetPage(currentFilters, changes);

  dispatch(updateFilters(updatedFilters));
  await dispatch(getMoviesThunk(updatedFilters));
});

export const getMovieByIdThunk = createAsyncThunk<MovieDto, number>(
  "movies/getMovieById",
  async (externalId: number): Promise<MovieDto> => {
    return await getMovieById(externalId);
  }
);

export const getMovieTrailerThunk = createAsyncThunk<
  MovieTrailerResponseDto,
  number
>(
  "movies/getTrailer",
  async (externalId: number): Promise<MovieTrailerResponseDto> => {
    return await getMovieTrailer(externalId);
  }
);
