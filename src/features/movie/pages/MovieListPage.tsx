import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { MovieBackdropImage, PaginationBar } from "../../../components/ui";
import { findBackdropUrl } from "../../../shared/utils/findBackdropMovie.util";
import { selectIsGenresLoaded } from "../../genre";
import { getGenresThunk } from "../../genre/genre.thunks";
import { MovieFiltersBlock } from "../components/movie-filter-container";
import {
  selectAllMovies,
  selectIsGetMovieLoading,
  selectIsMoviesLoaded,
  selectMovieBackdrop,
  selectMovieFilterInfo,
  selectMoviePaginationInfo,
} from "../movie.selectors";
import { setBackdropUrl } from "../movie.slice";
import { getMoviesThunk, applyFiltersThunk } from "../movie.thunks";
import { MovieGrid } from "../components";

export const MovieListPage = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector(selectAllMovies);
  const isGetMovieLoading = useAppSelector(selectIsGetMovieLoading);
  const isMoviesLoaded = useAppSelector(selectIsMoviesLoaded);
  const isGenresLoaded = useAppSelector(selectIsGenresLoaded);
  const backdropUrl = useAppSelector(selectMovieBackdrop);
  const movieFilters = useAppSelector(selectMovieFilterInfo);
  const moviePagindationInfo = useAppSelector(selectMoviePaginationInfo);

  // Effects
  useEffect(() => {
    if (!isMoviesLoaded) {
      dispatch(getMoviesThunk(movieFilters));
    }
    if (!isGenresLoaded) {
      dispatch(getGenresThunk());
    }
  }, [dispatch]);

  useEffect(() => {
    if (movies && movies.length > 0 && !backdropUrl) {
      dispatch(setBackdropUrl(findBackdropUrl(movies)));
    }
  }, [dispatch, movies, backdropUrl]);

  return (
    <>
      <MovieBackdropImage imgPath={backdropUrl} />

      <MovieFiltersBlock movieFilters={movieFilters} />

      <MovieGrid movies={movies} isLoading={isGetMovieLoading} />

      <PaginationBar
        page={moviePagindationInfo.page}
        totalPages={moviePagindationInfo.totalPages}
        hasNext={moviePagindationInfo.hasNext}
        hasPrev={moviePagindationInfo.hasPrev}
        onChange={(newPage) => dispatch(applyFiltersThunk({ page: newPage }))}
      />
    </>
  );
};
