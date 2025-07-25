import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAppTheme } from "../../theme/ThemeContext";

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useAppTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};
