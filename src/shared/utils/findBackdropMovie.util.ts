import type { MovieDto } from "../../features/movie/dto";
import { DEFAULT_BACKDROP_URL } from "../constants";
import { getTMDBImageUrl } from "./tmdbImage.util";

export const findBackdropUrl = (movies: MovieDto[]): string => {
  const validMovie = movies.find((movie) => movie.backdropPath);
  return getTMDBImageUrl(
    validMovie ? validMovie.backdropPath : DEFAULT_BACKDROP_URL,
    "backdrop",
    "original"
  );
};
