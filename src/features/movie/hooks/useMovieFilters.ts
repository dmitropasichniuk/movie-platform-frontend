import { useState, useEffect, useRef } from "react";

import type { FiltersLocalState, MovieSortTypes } from "../dto";
import { applyFiltersThunk } from "../movie.thunks";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectAllGenres } from "../../genre";

export const useMovieFilters = () => {
  const dispatch = useAppDispatch();
  const isFirstRender = useRef(true);

  const genres = useAppSelector(selectAllGenres);

  // Movie filter state
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState<MovieSortTypes>("popularity");
  const [order, setOrder] = useState<"ASC" | "DESC">("DESC");
  const [filters, setFilters] = useState<FiltersLocalState>({
    genreIds: [],
    releaseYear: undefined,
    adult: undefined,
  });

  // Handlers
  const handleSearchClear = () => setSearchInput("");
  const handleSortChange = (sortBy: MovieSortTypes, order: "ASC" | "DESC") => {
    setSortBy(sortBy);
    setOrder(order);
    dispatch(applyFiltersThunk({ sortBy, order }));
  };
  const handleFilter = (newPartialFilters: Partial<FiltersLocalState>) => {
    const updated = { ...filters, ...newPartialFilters };
    setFilters(updated);
    dispatch(applyFiltersThunk(updated));
  };

  // Effects
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const timeout = setTimeout(() => {
      dispatch(applyFiltersThunk({ search: searchInput }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput, dispatch]);

  return {
    // State
    genres,
    filters,
    sortBy,
    order,
    searchInput,

    // Handlers
    setSearchInput,
    handleSearchClear,
    handleSortChange,
    handleFilter,
  };
};
