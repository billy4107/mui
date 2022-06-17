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
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwitch } from "./sideBarSlice";
import { Content } from "./Content";

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
        <Box sx={{ display: "flex", flexWrap: 'warp' }}>
            <Box sx={{ display: "flex", width: '100%' }}>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <AppBar position="fixed" sx={{ bgcolor: "white", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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

                <Drawer
                    variant="permanent"
                    sx={{
                        width: switchValue ? drawerWidth : drawerWidthClose,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: switchValue ? drawerWidth : drawerWidthClose,
                            transition: "0.2s",
                            boxSizing: 'border-box'
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: "hidden" }}>
                        <List sx={{ minWidth: 239 }}>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List sx={{ minWidth: 239 }}>
                            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
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

                <Box component="main" sx={{ flexGrow: 1, p: 3, width: '100%' }}>
                    <Toolbar />
                    <Content />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                        neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                        tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                        sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                        tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                        gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                        et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                        tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </Box>

            </Box>
        </Box>
    );
};
