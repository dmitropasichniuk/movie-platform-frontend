import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { MovieSort } from "./MovieSort";
import { MovieFilter } from "./MovieFilter";
import { SearchBar } from "../../../../components/ui";
import type { MovieFilterDto, MovieSortTypes } from "../../dto";
import { selectAllGenres } from "../../../genre";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { useRef, useEffect, useState } from "react";
import { applyFiltersThunk, clearFiltersThunk } from "../../movie.thunks";

interface FilterProps {
  movieFilters: MovieFilterDto;
}

export const MovieFiltersBlock = ({ movieFilters }: FilterProps) => {
  const dispatch = useAppDispatch();

  const isFirstRender = useRef(true);
  const genres = useAppSelector(selectAllGenres);
  const [searchInput, setSearchInput] = useState(movieFilters.search ?? "");

  const handleSearchClear = () => {
    setSearchInput("");
  };
  const handleSortChange = (sortBy: MovieSortTypes, order: "ASC" | "DESC") => {
    dispatch(applyFiltersThunk({ sortBy, order }));
  };
  const handleFilter = (newPartialFilters: Partial<MovieFilterDto>) => {
    dispatch(applyFiltersThunk(newPartialFilters));
  };
  const clearFilters = () => {
    setSearchInput("");
    dispatch(clearFiltersThunk());
  };

  useEffect(() => {
    setSearchInput(movieFilters.search ?? "");
  }, [movieFilters.search]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (searchInput === (movieFilters.search ?? "")) {
      return;
    }

    const timeout = setTimeout(() => {
      dispatch(applyFiltersThunk({ search: searchInput }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInput, dispatch, movieFilters.search]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: 2,
        mb: 1,
        width: "100%",
      }}
    >
      <SearchBar
        value={searchInput}
        onChange={setSearchInput}
        onClear={handleSearchClear}
      />
      <MovieSort
        sortBy={movieFilters.sortBy}
        order={movieFilters.order}
        onSortChange={handleSortChange}
      />
      <MovieFilter
        allGenres={genres}
        genreIds={movieFilters.genreIds || []}
        releaseYear={movieFilters.releaseYear}
        adult={movieFilters.adult}
        onChange={handleFilter}
      />
      <Button
        size="small"
        onClick={clearFilters}
        startIcon={<ClearIcon />}
        variant="outlined"
        sx={{
          color: "text.secondary",
          textTransform: "none",
        }}
      >
        Reset
      </Button>
    </Box>
  );
};
