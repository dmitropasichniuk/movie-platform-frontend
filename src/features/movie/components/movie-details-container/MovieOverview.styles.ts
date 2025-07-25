import type { SxProps, Theme } from "@mui/material";

export const heroSectionStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap: 4,
  px: { xs: 2, sm: 4 },
  py: 4,
  background: "radial-gradient(circle at top left, #1e1e2f54, #0e0e1a1a)",
  backdropFilter: "blur(40px)",
  borderRadius: 3,
  boxShadow: 3,
  mb: 5,
};

export const posterStyles: SxProps<Theme> = {
  width: { xs: "100%", md: "320px" },
  height: "auto",
  maxHeight: "500px",
  borderRadius: 2,
  boxShadow: 5,
};

export const contentStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
};
