import { Typography, Chip, Box } from "@mui/material";
import type { GenreDto } from "../../../genre/dto";

interface GenresListProps {
  genres: GenreDto[] | undefined;
  title?: string;
  size?: "small" | "medium";
}

export const GenresList = ({
  genres,
  title = "Genres",
  size = "small",
}: GenresListProps) => {
  if (!genres?.length) return null;

  return (
    <Box>
      <Typography variant="subtitle2" color="text.secondary">
        {title}
      </Typography>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 0.5 }}>
        {genres.map((genre) => (
          <Chip
            key={genre.externalId}
            label={genre.name}
            size={size}
            variant="filled"
          />
        ))}
      </Box>
    </Box>
  );
};
