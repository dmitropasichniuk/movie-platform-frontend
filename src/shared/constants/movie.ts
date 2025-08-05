import type { MovieFilterDto } from "../../features/movie/dto";

export const DEFAULT_BACKDROP_URL = "/nAxGnGHOsfzufThz20zgmRwKur3.jpg";
export const YOUTUBE_URL = "https://www.youtube.com/embed/";

export const DEFAULT_MOVIE_FILTERS: MovieFilterDto = {
  page: 1,
  limit: 15,
  sortBy: "popularity",
  order: "DESC",
};
