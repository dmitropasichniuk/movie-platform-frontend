import { Box, CardMedia, Typography } from "@mui/material";
import { getTMDBImageUrl } from "../../../../shared/utils/tmdbImage.util";
import { MovieMetaField } from "./MovieMetaField";
import { GenresList } from "./GenreList";
import type { MovieDto } from "../../dto";
import {
  heroSectionStyles,
  posterStyles,
  contentStyles,
} from "./MovieOverview.styles";
import { getMovieDetails } from "../../utils/getMovieDetails";

interface Props {
  movie: MovieDto | null;
}

export const MovieOverview = ({ movie }: Props) => {
  if (!movie) return null;

  const posterUrl = getTMDBImageUrl(movie.posterPath, "poster", "w500");
  const movieDetails = getMovieDetails(movie);

  return (
    <Box sx={heroSectionStyles}>
      <CardMedia
        component="img"
        image={posterUrl}
        alt={movie.title}
        sx={posterStyles}
      />

      <Box sx={contentStyles}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {movie.title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          mb={2}
          textAlign="justify"
        >
          {movie.description}
        </Typography>

        {movieDetails.map(({ label, value }) => (
          <MovieMetaField key={label} label={label} value={value} />
        ))}

        {movie.adult && (
          <MovieMetaField key="Adult" label="Adult" value="Only 18+" />
        )}

        {movie.genres && <GenresList genres={movie.genres} />}
      </Box>
    </Box>
  );
};
