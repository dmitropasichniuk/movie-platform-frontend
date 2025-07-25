import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { ThemeToggle } from "../ui";
import logo from "../../assets/logo/flickly_logo.svg";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { selectIsAuthenticated } from "../../features/auth/auth.selectors";
import { setShowAuthModal } from "../../features/auth/auth.slice";

export const DesktopHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate("/user");
    } else {
      dispatch(setShowAuthModal(true));
    }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ bgcolor: "background.default", color: "text.primary" }}
    >
      <Toolbar sx={{ maxWidth: "1500px", margin: "0 auto", width: "100%" }}>
        <Box
          onClick={navigateToHome}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Movie Review Logo"
            sx={{ height: 40, mr: 1 }}
          />
          <Typography variant="h6" noWrap>
            Flickly
          </Typography>
        </Box>

        <Button color="inherit" component={Link} to="/">
          Головна
        </Button>
        <Button color="inherit" onClick={handleProfileClick}>
          <ListItemText primary={isAuthenticated ? "Профіль" : "Увійти"} />
        </Button>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
};
