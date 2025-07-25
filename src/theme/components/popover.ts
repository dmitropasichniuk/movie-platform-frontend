import type { Components } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const popoverTheme: Components<Theme>["MuiMenu"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      maxHeight: "50vh",
      borderRadius: 10,
      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
      background:
        theme.palette.custom?.popoverBg || theme.palette.background.paper,
      backdropFilter: "blur(5px)",
      padding: "8px",
    }),
  },
};
