import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  createTheme,
  ThemeProvider,
  Icon,
  Avatar,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSwitch } from "./sideBarSlice";

const theme = createTheme({
  palette: {
    green: {
      main: "#00701a",
    },
  },
});

export const Nav = () => {
  const dispatch = useDispatch();

  function toggleSwitchHandler() {
    dispatch(toggleSwitch());
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ color: "black" }}>
            News
          </Typography>

          <IconButton
            size="large"
            edge="start"
            color="green"
            aria-label="menu"
            onClick={toggleSwitchHandler}
            sx={{
              ml: 8,
              borderRadius: 2,
              p: 0.5,
              bgcolor: "#76d275",
              "&:hover": {
                background: "#43a047",
                color: "white",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Search"
            color="success"
            size="small"
            sx={{ width: 300, ml: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            size="large"
            edge="start"
            color="green"
            aria-label="menu"
            sx={{
              ml: 8,
              borderRadius: 2,
              p: 0.5,
              bgcolor: "#76d275",
              "&:hover": {
                background: "#43a047",
                color: "white",
              },
            }}
          >
            <NotificationsNoneIcon />
          </IconButton>

          <Box
            sx={{
              width: 80,
              height: 40,
              backgroundColor: "#6ab7ff",
              border: 1,
              display: "flex",
              justifyContent: "space-between",
              borderRadius: 16,
              ml: 1,
              "&:hover": {
                background: "#1e88e5",
                transition: "0.1s",
              },
            }}
          >
            <Avatar
              sx={{ height: "28px", width: "28px", m: "auto" }}
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <Icon sx={{ m: "auto", color: "white" }}>
              <SettingsIcon />
            </Icon>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
