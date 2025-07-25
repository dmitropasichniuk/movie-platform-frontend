import {
  createContext,
  useMemo,
  useState,
  useContext,
  type ReactNode,
} from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

type ThemeMode = "light" | "dark";

const ThemeContext = createContext({
  mode: "light" as ThemeMode,
  toggleTheme: () => {},
});

export const useAppTheme = () => useContext(ThemeContext);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(
    () => (mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
