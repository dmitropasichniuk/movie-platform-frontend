import { Box } from "@mui/material";

export const BackgroundGradientBlobs = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "0%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #1976d2 0%, transparent 80%)",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "40%",
          right: "0%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #7B6EF6 0%, transparent 80%)",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "5%",
          left: "20%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, #66bb6a 0%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />
    </Box>
  );
};
