import type { SxProps, Theme } from "@mui/system";

export const cardStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative",
  borderRadius: 2,
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  backgroundColor: "transparent",
};

export const mediaStyles: SxProps<Theme> = {
  height: "100%",
  maxHeight: "320px",
  flexShrink: 1,
};

export const ratingChipStyles: SxProps<Theme> = {
  position: "absolute",
  top: 10,
  left: 10,
  bgcolor: "#00000042",
  backdropFilter: "blur(5px)",
  color: "#fff",
  fontWeight: 600,
  "& .MuiChip-icon": {
    color: "gold",
  },
};
