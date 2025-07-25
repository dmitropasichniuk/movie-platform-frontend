import { Card, CardMedia, Typography, Chip } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getTMDBImageUrl } from "../../../../shared/utils/tmdbImage.util";
import type { MovieDto } from "../../dto";
import { cardStyles, mediaStyles, ratingChipStyles } from "./MovieCard.styles";

interface Props {
  movie: MovieDto;
}

export const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  const posterUrl = getTMDBImageUrl(movie.posterPath, "poster", "w342");
  const [isHovered, setIsHovered] = useState(false);

  const cardClick = () => {
    navigate(`/movies/${movie.externalId}`);
  };

  return (
    <Card
      sx={{
        ...cardStyles,
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        zIndex: isHovered ? 10 : 1,
        boxShadow: isHovered
          ? "0 15px 35px rgba(0,0,0,0.7)"
          : "0 5px 15px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={cardClick}
    >
      <CardMedia
        component="img"
        image={posterUrl}
        alt={movie.title}
        sx={mediaStyles}
      />
      <Chip
        icon={<Star />}
        label={movie.voteAverage.toFixed(1)}
        size="small"
        sx={ratingChipStyles}
      />
      <Typography noWrap sx={{ padding: 2 }}>
        {movie.title}
      </Typography>
    </Card>
  );
};
