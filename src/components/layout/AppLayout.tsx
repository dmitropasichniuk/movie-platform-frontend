import { Outlet } from "react-router-dom";
import { useTheme, useMediaQuery, Box } from "@mui/material";

import { DesktopHeader } from "./DesktopHeader";
import { MobileDrawer } from "./MobileDrawer";
import { BackgroundGradientBlobs } from "./BackgroundGradientBlobs";
import { Footer } from "./Footer";

export const AppLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {isMobile ? <MobileDrawer /> : <DesktopHeader />}
      <BackgroundGradientBlobs />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          width: "100%",
          maxWidth: "1500px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
        px={2}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
};
