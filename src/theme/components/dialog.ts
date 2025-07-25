import type { Components, Theme } from "@mui/material";

export const dialogTheme: Components<Theme>["MuiDialog"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      borderRadius: 10,
      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
      background:
        theme.palette.custom?.popoverBg || theme.palette.background.paper,
      backdropFilter: "blur(2px)",
      padding: "8px",
    }),
  },
};
