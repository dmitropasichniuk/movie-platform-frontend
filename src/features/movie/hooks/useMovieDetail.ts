import { useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getMovieByIdThunk, getMovieTrailerThunk } from "../movie.thunks";
import type { MovieDto } from "../dto";

export const useMovieDetail = (
  movie: MovieDto | null,
  id: string | undefined,
  isMovieLoading: boolean,
  isTrailerLoading: boolean,
  trailerError: string | null
) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie && id && !isMovieLoading) {
      dispatch(getMovieByIdThunk(Number(id)));
    }
  }, [movie, id, isMovieLoading, dispatch]);

  useEffect(() => {
    if (
      movie?.externalId &&
      !movie?.videoId &&
      !isTrailerLoading &&
      !trailerError
    ) {
      dispatch(getMovieTrailerThunk(movie.externalId));
    }
  }, [
    movie?.externalId,
    movie?.videoId,
    isTrailerLoading,
    trailerError,
    dispatch,
  ]);
};
