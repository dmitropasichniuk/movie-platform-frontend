import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/system";

export const mainBoxStyle = (gap = 6): SxProps<Theme> => ({
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  gap,
  px: { xs: 2, sm: 5 },
  py: 5,
  background: "radial-gradient(circle at top left, #1e1e2f54, #0e0e1a1a)",
  backdropFilter: "blur(40px)",
  borderRadius: 3,
  boxShadow: 3,
  mb: 5,
});

export const mainCardMediaStyles = (boxShadow = 5): SxProps<Theme> => ({
  width: { xs: "100%", md: "320px" },
  height: "auto",
  maxHeight: "500px",
  borderRadius: 2,
  boxShadow,
});
