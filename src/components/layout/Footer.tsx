import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 2,
        textAlign: "center",
        backgroundColor: "background.default",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Movie Review Platform. All rights reserved.
      </Typography>
    </Box>
  );
};
