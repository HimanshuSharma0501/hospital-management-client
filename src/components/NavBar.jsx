import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn, userRole }) => {
  return (
    <AppBar position="static" sx={{ margin: 0 }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Super Speciality Hospital
          </Link>
        </Typography>

        {/* Conditional Buttons */}
        <Box>
          {!isLoggedIn ? (
            <>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </>
          ) : (
            <>
              {userRole === "doctor" || userRole === "admin" ? (
                <Button color="inherit" component={Link} to="/dashboard">
                  Dashboard
                </Button>
              ) : null}
              <Button color="inherit" component={Link} to="/logout">
                Logout
              </Button>
            </>
          )}
          <Button color="inherit" component={Link} to="/profile">
            {/* Optional: Profile Icon */}
            {isLoggedIn && (
              <>
                <Typography> My Profile</Typography>
                <IconButton color="inherit" component={Link} to="/profile">
                  <AccountCircle />
                </IconButton>
              </>
            )}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
