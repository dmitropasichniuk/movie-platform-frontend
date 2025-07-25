import {
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  OutlinedInput,
  type SelectChangeEvent,
} from "@mui/material";
import type { GenreDto } from "../../../genre/dto";
import { StyledFormControl } from "./StyledFormControl";

type MovieFilterProps = {
  allGenres?: GenreDto[];
  genreIds: number[];
  releaseYear?: number;
  adult?: boolean;
  onChange: (filters: {
    genreIds?: number[];
    releaseYear?: number | undefined;
    adult?: boolean | undefined;
  }) => void;
};

const years = Array.from(
  { length: 26 },
  (_, i) => new Date().getFullYear() - i
);

export const MovieFilter = ({
  allGenres,
  genreIds,
  releaseYear,
  adult,
  onChange,
}: MovieFilterProps) => {
  const handleGenreChange = (event: SelectChangeEvent<number[]>) => {
    const value = event.target.value as number[];

    onChange({ genreIds: value });
  };

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    const value = parseInt(event.target.value);
    const year = isNaN(value) ? undefined : value;

    onChange({ releaseYear: year });
  };

  const handleAdultChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    const parsed =
      value === "true" ? true : value === "false" ? false : undefined;

    onChange({ adult: parsed });
  };

  return (
    <>
      {allGenres && allGenres?.length > 0 && (
        <StyledFormControl size="small">
          <InputLabel id="genre-label">Жанри</InputLabel>
          <Select
            labelId="genre-label"
            multiple
            value={genreIds}
            onChange={handleGenreChange}
            input={<OutlinedInput label="Жанри" />}
            renderValue={(selected) =>
              selected
                .map(
                  (externalId) =>
                    allGenres?.find((g) => g.externalId === externalId)?.name
                )
                .join(", ")
            }
          >
            {allGenres?.map((genre) => (
              <MenuItem key={genre.externalId} value={genre.externalId}>
                <Checkbox checked={genreIds.includes(genre.externalId)} />
                <ListItemText primary={genre.name} />
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      )}

      <StyledFormControl size="small">
        <InputLabel id="year-label">Рік</InputLabel>
        <Select
          labelId="year-label"
          value={releaseYear ? releaseYear?.toString() : "all"}
          onChange={handleYearChange}
          label="Рік"
        >
          <MenuItem value="all">Усі</MenuItem>
          {years.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>

      <StyledFormControl size="small">
        <InputLabel id="adult-label">Вікова категорія</InputLabel>
        <Select
          labelId="adult-label"
          value={adult === undefined ? "all" : String(adult)}
          onChange={handleAdultChange}
          label="Дорослий контент"
        >
          <MenuItem value="all">Усі</MenuItem>
          <MenuItem value="false">Без 18+</MenuItem>
          <MenuItem value="true">Фільми 18+</MenuItem>
        </Select>
      </StyledFormControl>
    </>
  );
};
