import { Box } from "@mui/system";

import { SearchBar } from "../../../../components/ui";
import { MovieSort } from "./MovieSort";
import { MovieFilter } from "./MovieFilter";
import { useMovieFilters } from "../../hooks/useMovieFilters";

export const MovieFilterContainer = () => {
  const {
    genres,
    filters,
    sortBy,
    order,
    searchInput,
    setSearchInput,
    handleSortChange,
    handleFilter,
    handleSearchClear,
  } = useMovieFilters();

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
      <MovieSort
        sortBy={sortBy}
        order={order}
        onSortChange={handleSortChange}
      />
      <MovieFilter
        allGenres={genres}
        genreIds={filters.genreIds}
        releaseYear={filters.releaseYear}
        adult={filters.adult}
        onChange={handleFilter}
      />
      <SearchBar
        value={searchInput}
        onChange={(input) => setSearchInput(input)}
        onClear={handleSearchClear}
      />
    </Box>
  );
};
