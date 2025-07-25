import { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useScrollToTop,
  useAppDispatch,
  useAppSelector,
} from "../../../app/hooks";
import { MovieOverview, MovieTrailer } from "../components";
import { useMovieDetail } from "../hooks";
import {
  selectIsTrailerLoading,
  selectIsGetMovieLoading,
  selectMovieByExternalId,
  selectSingleMovie,
  selectTrailerError,
} from "../movie.selectors";
import { clearSingleMovie, clearTrailerError } from "../movie.slice";

export const MovieDetailPage = () => {
  useScrollToTop();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const isTrailerLoading = useAppSelector(selectIsTrailerLoading);
  const trailerError = useAppSelector(selectTrailerError);
  const isMovieLoading = useAppSelector(selectIsGetMovieLoading);
  const movieFromStore = useAppSelector(selectMovieByExternalId(Number(id)));
  const movieFromSingle = useAppSelector(selectSingleMovie);
  const movie = movieFromStore ?? movieFromSingle;

  useMovieDetail(movie, id, isMovieLoading, isTrailerLoading, trailerError);

  useEffect(() => {
    return () => {
      dispatch(clearSingleMovie());
      dispatch(clearTrailerError());
    };
  }, [dispatch]);

  return (
    <>
      <MovieOverview movie={movie} />
      <MovieTrailer videoId={movie?.videoId} loading={isTrailerLoading} />
    </>
  );
};
