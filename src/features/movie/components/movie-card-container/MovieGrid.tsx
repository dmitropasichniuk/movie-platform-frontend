import { Box } from "@mui/system";
import type { MovieDto } from "../../dto";
import { MovieCard } from "./MovieCard";
import { ListStatus } from "../../../../components/ui/ListStatus";
import { Loader } from "../../../../components/ui/Loader";
import { gridStyles, loaderBoxStyles } from "./MovieGrid.styles";

type MovieGridProps = {
  movies: MovieDto[];
  isLoading: boolean;
};

export const MovieGrid = ({ movies, isLoading }: MovieGridProps) => (
  <>
    <Box sx={loaderBoxStyles}>{isLoading && <Loader />}</Box>
    <Box
      sx={{
        ...gridStyles,
        opacity: isLoading ? 0.6 : 1,
      }}
    >
      {isLoading && (
        <ListStatus
          error={null}
          isEmpty={movies.length === 0}
          emptyText="Movies not found"
        />
      )}
      {movies.map((movie) => (
        <MovieCard key={movie.externalId} movie={movie} />
      ))}
    </Box>
  </>
);
