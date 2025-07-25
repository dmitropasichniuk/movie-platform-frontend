import { createTheme } from "@mui/material/styles";
import { dialogTheme, popoverTheme } from "./components";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7B6EF6" },
    secondary: { main: "#1EA5FC" },
    background: {
      default: "#121829",
      paper: "#20283E",
    },
    text: {
      primary: "#fff",
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
      popoverBg: "#1a233ecc",
    },
  },
  components: {
    MuiMenu: popoverTheme,
    MuiDialog: dialogTheme,
    MuiCssBaseline: {
      styleOverrides: {
        "input:-webkit-autofill": {
          boxShadow: "0 0 0 1000px #20283E inset",
          WebkitTextFillColor: "#fff",
          transition: "background-color 9999s ease-in-out 0s",
          caretColor: "#fff",
        },
        "input:-webkit-autofill:hover": {
          boxShadow: "0 0 0 1000px #20283E inset",
        },
        "input:-webkit-autofill:focus": {
          boxShadow: "0 0 0 1000px #20283E inset",
        },
      },
    },
  },
});
