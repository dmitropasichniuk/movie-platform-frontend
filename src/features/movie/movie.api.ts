import qs from "qs";
import { api } from "../../app/axios";
import type { PaginatedResponseDto } from "../../shared/dto";
import type { MovieFilterDto, MovieDto, MovieTrailerResponseDto } from "./dto";

export const getMovies = async (
  params: MovieFilterDto
): Promise<PaginatedResponseDto<MovieDto[]>> => {
  const res = await api.get("/movies", {
    params,
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
  });

  return res.data.data;
};

export const getMovieById = async (id: number): Promise<MovieDto> => {
  const res = await api.get(`/movies/${id}`);
  return res.data.data;
};

export const getMovieTrailer = async (
  id: number
): Promise<MovieTrailerResponseDto> => {
  const res = await api.get(`/movies/${id}/trailer`);
  return res.data.data;
};
