import {
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

import { StyledFormControl } from "./StyledFormControl";
import type { MovieSortTypes } from "../../dto";
import { getSortOptions } from "../../utils";

type MovieSortProps = {
  sortBy: MovieSortTypes;
  order: "ASC" | "DESC";
  onSortChange: (sortBy: MovieSortTypes, order: "ASC" | "DESC") => void;
};

export const MovieSort = ({ sortBy, order, onSortChange }: MovieSortProps) => {
  const currentValue = `${sortBy}:${order}`;
  const sortOptions = getSortOptions();

  const handleChange = (event: SelectChangeEvent) => {
    const [sort, ord] = event.target.value.split(":");
    onSortChange(sort as MovieSortTypes, ord as "ASC" | "DESC");
  };

  return (
    <StyledFormControl size="small">
      <InputLabel id="sort-label">Сортувати</InputLabel>
      <Select
        labelId="sort-label"
        value={currentValue}
        input={<OutlinedInput label="Сортувати" />}
        onChange={handleChange}
      >
        {sortOptions.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};
