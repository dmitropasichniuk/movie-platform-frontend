import { Box, CircularProgress } from "@mui/material";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "primary.main",
        gap: 1,
      }}
    >
      <CircularProgress size={20} />
      Loading...
    </Box>
  );
};
