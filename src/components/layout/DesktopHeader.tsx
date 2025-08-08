import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ThemeToggle } from "../ui";
import logo from "../../assets/logo/flickly_logo.svg";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { selectIsAuthenticated } from "../../features/auth/auth.selectors";
import { setShowAuthModal } from "../../features/auth/auth.slice";
import { handleLogout } from "../../features/auth/auth.handlers";
import { HeaderBtn } from "./HeaderBtn";

export const DesktopHeader = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

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

  const logoutClick = () => {
    dispatch(handleLogout());
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

        <Box sx={{ display: "flex", gap: 3 }}>
          <HeaderBtn
            text="Main"
            path="/"
            activePath={location.pathname}
            onClick={navigateToHome}
          />
          <HeaderBtn
            text="About Us"
            path="/about"
            activePath={location.pathname}
            onClick={() => navigate("/about")}
          />
          <HeaderBtn
            text={isAuthenticated ? "Profile" : "Login"}
            path={isAuthenticated ? "/user" : null}
            activePath={location.pathname}
            onClick={handleProfileClick}
          />
          {isAuthenticated && (
            <Button color="inherit" onClick={logoutClick}>
              <ListItemText primary="Logout" />
            </Button>
          )}
          <ThemeToggle variant="icon" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
