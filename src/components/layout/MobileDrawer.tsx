import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { ThemeToggle } from "../ui";
import logo from "../../assets/logo/flickly_logo.svg";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import { selectIsAuthenticated } from "../../features/auth/auth.selectors";
import { setShowAuthModal } from "../../features/auth/auth.slice";
import { handleLogout } from "../../features/auth/auth.handlers";

export const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
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

  const logoutClick = () => {
    dispatch(handleLogout());
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={1}
        sx={{ bgcolor: "background.default", color: "text.primary" }}
      >
        <Toolbar>
          <Box
            component="img"
            src={logo}
            alt="Movie Review Logo"
            sx={{ height: 40, mr: 1 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Flickly
          </Typography>
          <IconButton edge="end" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 250 }} onClick={() => setOpen(false)}>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/">
              <ListItemText primary="Main" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/about">
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleProfileClick}>
              <ListItemText primary={isAuthenticated ? "Profile" : "Login"} />
            </ListItemButton>
          </ListItem>
          {isAuthenticated && (
            <ListItem disablePadding>
              <ListItemButton onClick={logoutClick}>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
        <ThemeToggle variant="menu" />
      </Drawer>
    </>
  );
};
