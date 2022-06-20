import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
    Box,
    InputAdornment,
    TextField,
    Typography,
    IconButton,
    AppBar,
    createTheme,
    ThemeProvider,
    Icon,
    Avatar,
    ListItemText,
    Drawer,
    CssBaseline,
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListSubheader,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "./sideBarSlice";
import { Dashboard } from "./Dashboard";

const drawerWidth = 240;
const drawerWidthClose = 0;
const theme = createTheme({
    palette: {
        green: {
            main: "#00701a",
        },
    },
});

// const useStyles = makeStyles((theme) => ({
//     hide: {
//         display: "none",
//     },
// }));

export const NavAndSide = () => {
    const dispatch = useDispatch();
    const switchValue = useSelector((state) => state.side.active);

    function toggleSwitchHandler() {
        dispatch(toggleSwitch());
        console.log(switchValue);
    }

    return (
        <Box sx={{ display: "flex", minHeight: '1000px'}}>
            <Box sx={{ display: "flex", width: '100%' }}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <AppBar position="fixed" elevation={0} sx={{ bgcolor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ color: "black" }}>
                                Web application
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
                                    bgcolor: "#EDE7F6",
                                    color: "#4527A0",
                                    "&:hover": {
                                        background: "#4527A0",
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
                                sx={{ width: 300, ml: 3, borderRadius: 16 }}
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
                                aria-label="menu"
                                sx={{
                                    ml: 8,
                                    borderRadius: 2,
                                    p: 0.5,
                                    bgcolor: "#EDE7F6",
                                    color: "#4527A0",
                                    "&:hover": {
                                        background: "#4527A0",
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

                <Drawer
                    variant="permanent"
                    sx={{
                        width: switchValue ? drawerWidth : drawerWidthClose,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: switchValue ? drawerWidth : drawerWidthClose,
                            transition: "0.1s",
                            boxSizing: 'border-box',
                            border: 0,
                            // paddingRight: 2,
                            // paddingLeft: 2
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "hidden" }}>
                        <List sx={{ minWidth: '100%' }}
                            subheader={
                                <ListSubheader component="div" id="Dashboard">
                                    Dashboard
                                </ListSubheader>
                            }>
                            <ListItem disablePadding>
                                <ListItemButton sx={{
                                    "&:hover": {
                                        background: "#EDE7F6",
                                        transition: "0.1s",
                                        color: "#4527A0",
                                        fontWeight: 'bold'
                                    },
                                }}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText>Dashboard</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider variant="middle" />
                        <List sx={{ minWidth: '100%' }}
                            subheader={
                                <ListSubheader component="div" id="Pages">
                                    Pages
                                </ListSubheader>
                            }>
                            <ListItem disablePadding>
                                <ListItemButton sx={{
                                    "&:hover": {
                                        background: "#EDE7F6",
                                        transition: "0.1s",
                                        color: "#4527A0",
                                        fontWeight: 'bold'
                                    },
                                }}>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText>Authentication</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Divider variant="middle" />
                        <List sx={{ minWidth: '100%' }} subheader={
                            <ListSubheader component="div" id="Utilities">
                                Utilities
                            </ListSubheader>
                        }>
                            {['Typography', 'Color', 'Shadow', 'Icons'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton sx={{
                                        "&:hover": {
                                            background: "#EDE7F6",
                                            transition: "0.1s",
                                            color: "#4527A0",
                                            fontWeight: 'bold'
                                        },
                                    }}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider variant="middle" />
                        <List sx={{ minWidth: '100%' }}>
                            {['Sample Page', 'Documentation'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton sx={{
                                        "&:hover": {
                                            background: "#EDE7F6",
                                            transition: "0.1s",
                                            color: "#4527A0",
                                            fontWeight: 'bold'
                                        },
                                    }}>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>

                <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <Dashboard />
                </Box>
                

            </Box>
        </Box>
    );
};
