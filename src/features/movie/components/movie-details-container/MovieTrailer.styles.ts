import type { CSSProperties, SxProps, Theme } from "@mui/material";

export const trailerBoxStyles: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  aspectRatio: "16/9",
  borderRadius: 2,
  overflow: "hidden",
  boxShadow: 3,
};

export const iframeStyles: CSSProperties = {
  display: "block",
  pointerEvents: "auto",
  border: "none",
};

export const iframeSkeletonStyles: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
};

export const trailerError: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "text.secondary",
};
