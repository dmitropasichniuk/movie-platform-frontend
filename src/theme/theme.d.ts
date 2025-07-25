import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom?: {
      popoverBg?: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      popoverBg?: string;
    };
  }
}
