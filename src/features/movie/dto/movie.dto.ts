import type { PaginatedResponseDto } from "../../../shared/dto";
import type { GenreDto } from "../../genre/dto/genre.dto";

export interface MovieDto {
  externalId: number;
  title: string;
  description?: string;
  releaseDate: string;
  originalLanguage: string;
  adult: boolean;
  genres: GenreDto[];
  popularity: number;
  voteAverage: number;
  voteCount: number;
  posterPath?: string;
  backdropPath?: string;
  videoId: string | undefined;
}

export interface MoviePaginatedState<T, F = unknown> {
  data: PaginatedResponseDto<T> | null;
  singleMovie: MovieDto | null;
  loading: boolean;
  isTrailerLoading: boolean;
  trailerError: string | null;
  error: string | null;
  filters: F;
  isMovieLoaded: boolean;
  backdropUrl: string | undefined;
}

export interface MovieTrailerResponseDto {
  videoId: string | undefined;
}

export interface MovieFilterDto {
  page: number;
  limit: number;
  sortBy: MovieSortTypes;
  order: "ASC" | "DESC";
  search?: string;
  genreIds?: number[];
  releaseYear?: number;
  adult?: boolean;
}

export type MovieSortTypes =
  | "title"
  | "releaseDate"
  | "popularity"
  | "voteAverage"
  | "voteCount";
