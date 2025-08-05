import { InputBase, IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Clear from "@mui/icons-material/Clear";

type Props = {
  value: string | undefined;
  placeholder?: string;
  onChange: (text: string) => void;
  onClear?: () => void;
};

export const SearchBar = ({ value, placeholder, onChange, onClear }: Props) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        minWidth: 120,
        flexGrow: 1,
      }}
    >
      <SearchIcon />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <IconButton
        onClick={onClear}
        sx={{ p: 0, width: 32, visibility: value ? "visible" : "hidden" }}
      >
        <Clear />
      </IconButton>
    </Paper>
  );
};
