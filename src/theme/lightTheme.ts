import { createTheme } from "@mui/material/styles";
import { dialogTheme, popoverTheme } from "./components";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
    },
    text: {
      primary: "#000",
    },

    // main 500, light 400, dark 600
    success: {
      main: "#05CE91",
      light: "#37D8A7",
      dark: "#04A574",
      contrastText: "#fff",
    },
    error: {
      main: "#FF6161",
      light: "#FF8181",
      dark: "#CC4E4E",
      contrastText: "#fff",
    },
    warning: {
      main: "#FFAD49",
      light: "#FFBD6D",
      dark: "#CC8A3A",
      contrastText: "#fff",
    },

    custom: {
      popoverBg: "#f5f5f5b8",
    },
  },
  components: {
    MuiMenu: popoverTheme,
    MuiDialog: dialogTheme,
  },
});
