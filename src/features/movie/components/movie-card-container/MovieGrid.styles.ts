import type { SxProps, Theme } from "@mui/system";

export const loaderBoxStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 24,
  mb: 1.5,
};

export const gridStyles: SxProps<Theme> = {
  display: "grid",
  gap: 3,
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  "@media (max-width: 549px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
};
