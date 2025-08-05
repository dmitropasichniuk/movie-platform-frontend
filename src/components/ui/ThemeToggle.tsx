import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { useAppTheme } from "../../theme/ThemeContext";

interface ThemeToggleProps {
  variant?: "icon" | "menu";
}

export const ThemeToggle = ({ variant = "icon" }: ThemeToggleProps) => {
  const { mode, toggleTheme } = useAppTheme();

  if (variant === "menu") {
    return (
      <ListItem disablePadding>
        <ListItemButton onClick={toggleTheme}>
          <ListItemText
            primary={mode === "light" ? "Dark Mode" : "Light Mode"}
          />
          <ListItemIcon>
            {mode === "light" ? <Brightness4 /> : <Brightness7 />}
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};
