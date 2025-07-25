import type { MovieDto } from "../dto";

interface MovieDetail {
  label: string;
  value: string | number | undefined;
}

export const getMovieDetails = (movie: MovieDto): MovieDetail[] => [
  { label: "Vote average", value: movie.voteAverage },
  { label: "Popularity", value: movie.popularity },
  { label: "Vote count", value: movie.voteCount },
  { label: "Release Date", value: movie.releaseDate },
  { label: "Original language", value: movie.originalLanguage },
];
