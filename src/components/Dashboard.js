import { Box, Card, CardContent, Grid, Stack, Typography, createTheme, ThemeProvider, Select, FormControl, MenuItem, Divider, Icon, Button } from '@mui/material'
import React from 'react'
import { useStyles } from '../style/NavAndBarStyle';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StorefrontIcon from '@mui/icons-material/Storefront';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TableChartIcon from '@mui/icons-material/TableChart';

const theme = createTheme({
    palette: {
        bgearning: {
            main: "#4527A0",
        },
    },
});

export const Dashboard = () => {
    const classes = useStyles()
    const [age, setAge] = React.useState('10');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    <Grid item xs={4} sx={{ height: '100%' }}>
                        <Card elevation={0} sx={{ minWidth: '100%', maxWidth: '100%', height: '100%', bgcolor: '#5E35B1', color: 'white', borderRadius: 3, padding: 1, position: 'relative' }} >
                            <Card elevation={0} className={classes.circlebefore} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#4527A0' }}></Card>
                            <CardContent>
                                <Card elevation={0} className={classes.circleafter} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#4527A0' }}></Card>
                                <Grid container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    marginBottom={2}>
                                    <Box
                                        size="large"
                                        aria-label="menu"
                                        sx={{
                                            borderRadius: 2,
                                            p: 1.2,
                                            bgcolor: "#4527A0",
                                            color: 'white',
                                            display: 'flex'
                                        }}
                                    >
                                        <LocalAtmIcon />
                                    </Box>

                                    <Box
                                        size="large"
                                        aria-label="menu"
                                        sx={{
                                            borderRadius: 2,
                                            p: 0.5,
                                            bgcolor: "#5E35B1",
                                            color: 'white',
                                            display: 'flex',
                                            zIndex: '1'
                                        }}
                                    >
                                        <MoreHorizIcon />
                                    </Box>
                                </Grid>
                                <Typography variant="h5" component="div" sx={{ fontSize: '2.125rem' }}>
                                    <b>$500.00</b>
                                </Typography>
                                <Typography color="#B39DDB">
                                    <b>Total Earning</b>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4} sx={{ height: '100%' }}>
                        <Card elevation={0} sx={{ minWidth: '100%', maxWidth: '100%', height: '100%', bgcolor: '#2196f3', color: 'white', borderRadius: 3, padding: 1, position: 'relative' }}>
                            <Card elevation={0} className={classes.circlebefore} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#1565C0' }}></Card>
                            <CardContent>
                                <Card elevation={0} className={classes.circleafter} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#1565C0' }}></Card>
                                <Grid container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    marginBottom={2}>
                                    <Box
                                        size="large"
                                        aria-label="menu"
                                        sx={{
                                            borderRadius: 2,
                                            p: 1.2,
                                            bgcolor: "#1565C0",
                                            color: 'white',
                                            display: 'flex'
                                        }}
                                    >
                                        <LocalMallIcon />
                                    </Box>

                                    <Box
                                        size="large"
                                        aria-label="menu"
                                        sx={{
                                            borderRadius: 2,
                                            p: 0.5,
                                            bgcolor: "#2196F3",
                                            color: 'white',
                                            display: 'flex',
                                            zIndex: '1'
                                        }}
                                    >
                                        <MoreHorizIcon />
                                    </Box>
                                </Grid>

                                <Typography variant="h5" component="div" sx={{ fontSize: '2.125rem' }}>
                                    <b>$961</b>
                                </Typography>
                                <Typography color="#90CAF9">
                                    <b>Total Order</b>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>

                        <Stack
                            direction="column"
                            justifyContent="space-between"
                            alignItems="stretch"
                            spacing={3}
                            sx={{ height: '100%' }}
                        >
                            <Card elevation={0} sx={{ minWidth: '100%', maxWidth: '100%', height: '80px', bgcolor: '#1E88E5', color: 'white', borderRadius: 3, position: 'relative' }}>
                                <Card elevation={0} className={classes.circlebeforemini} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#1565C0' }}></Card>
                                <CardContent>
                                    <Card elevation={0} className={classes.circleaftermini} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#1565C0' }}></Card>
                                    <Grid container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                    >
                                        <Box
                                            size="large"
                                            aria-label="menu"
                                            sx={{
                                                borderRadius: 2,
                                                marginRight: 2,
                                                p: 1.2,
                                                bgcolor: "#1565C0",
                                                color: 'white',
                                                display: 'flex'
                                            }}
                                        >
                                            <TableChartIcon />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" component="div" sx={{ fontSize: '1rem' }} gutterBottom>
                                                <b>$203k</b>
                                            </Typography>
                                            <Typography variant="h5" component="div" sx={{ fontSize: '0.75em' }}>
                                                Total Income
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </CardContent>
                            </Card>

                            <Card elevation={0} sx={{ minWidth: '100%', maxWidth: '100%', height: '80px', borderRadius: 3, position: 'relative' }}>
                                <Card elevation={0} className={classes.circlebeforemini} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#FFF8E1' }}></Card>
                                <CardContent>
                                    <Card elevation={0} className={classes.circleaftermini} sx={{ position: 'absolute', borderRadius: '50%', bgcolor: '#FFF8E1' }}></Card>
                                    <Grid container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                    >
                                        <Box
                                            size="large"
                                            aria-label="menu"
                                            sx={{
                                                borderRadius: 2,
                                                marginRight: 2,
                                                p: 1.2,
                                                bgcolor: "#FFF8E1",
                                                color: '#FFC107',
                                                display: 'flex'
                                            }}
                                        >
                                            <StorefrontIcon />
                                        </Box>
                                        <Box>
                                            <Typography variant="h5" component="div" sx={{ fontSize: '1rem' }} gutterBottom>
                                                <b>$203k</b>
                                            </Typography>
                                            <Typography variant="h5" component="div" sx={{ fontSize: '0.75em' }}>
                                                Total Income
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Stack >

                    </Grid>

                    <Grid item xs={8}>
                        <Card elevation={0} sx={{ minWidth: '100%', maxWidth: '100%', height: '100%', color: 'black ', borderRadius: 3, padding: 1, position: 'relative', marginTop: 2 }} >
                            <CardContent>
                                <Grid container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ m: 'auto' }}>
                                    <Box>
                                        <Typography sx={{ fontSize: '0.75rem' }}>
                                            Total Growth
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.25rem' }}>
                                            <b>$2,324.00</b>
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <FormControl sx={{ minWidth: 80 }}>
                                            <Select
                                                labelId="demo-simple-select-autowidth-label"
                                                id="demo-simple-select-autowidth"
                                                value={age}
                                                onChange={handleChange}
                                                autoWidth
                                                sx={{ bgcolor: "white", height: 40, borderRadius: 3 }}
                                            >
                                                <MenuItem value={10}>To day</MenuItem>
                                                <MenuItem value={21}>Twenty one</MenuItem>
                                                <MenuItem value={22}>Twenty one and a half</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Box sx={{ fontSize: 100, textAlign: 'center' }}>
                                    --Chart--
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card elevation={0} sx={{ minWidth: '100%', maxWidth: '100%', height: '100%', color: 'black', borderRadius: 3, padding: 1, position: 'relative', marginTop: 2 }} >
                            <CardContent>
                                <Grid container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ m: 'auto', mb: 2 }}>
                                    <Typography>
                                        <b>Popular Stocks</b>
                                    </Typography>

                                    <MoreHorizIcon />
                                </Grid>

                                <Grid sx={{ bgcolor: '#EDE7F6', padding: '16px', borderRadius: '12px', height: '150px' }}>
                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{ m: 'auto' }}>
                                        <Typography>
                                            Bajaj Finery
                                        </Typography>

                                        <Typography>
                                            <b>$1839.00</b>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        10% Profit
                                    </Grid>
                                </Grid>

                                <Grid sx={{ mt: 3 }}>
                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography>
                                            Bajaj Finery
                                        </Typography>

                                        <Typography sx={{ display: 'flex' }}>
                                            <b>$1839.00</b>
                                            <Icon sx={{ color: '#00C853', bgcolor: '#b7deb8', borderRadius: 2, ml: 2 }}>
                                                <KeyboardArrowUpIcon />
                                            </Icon>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sx={{ color: '#00C853' }}>
                                        10% Profit
                                    </Grid>
                                    <Divider sx={{ my: 2 }} />

                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography>
                                            TTML
                                        </Typography>

                                        <Typography sx={{ display: 'flex' }}>
                                            <b>$100.00</b>
                                            <Icon sx={{ color: '#D84315', bgcolor: '#ffbba7', borderRadius: 2, ml: 2 }}>
                                                <KeyboardArrowDownIcon />
                                            </Icon>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sx={{ color: '#D84315' }}>
                                        10% loss
                                    </Grid>
                                    <Divider sx={{ my: 2 }} />

                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography>
                                            Reliance
                                        </Typography>

                                        <Typography sx={{ display: 'flex' }}>
                                            <b>$200.00</b>
                                            <Icon sx={{ color: '#00C853', bgcolor: '#b7deb8', borderRadius: 2, ml: 2 }}>
                                                <KeyboardArrowUpIcon />
                                            </Icon>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sx={{ color: '#00C853' }}>
                                        10% Profit
                                    </Grid>
                                    <Divider sx={{ my: 2 }} />

                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography>
                                            TTML
                                        </Typography>

                                        <Typography sx={{ display: 'flex' }}>
                                            <b>$189.00</b>
                                            <Icon sx={{ color: '#D84315', bgcolor: '#ffbba7', borderRadius: 2, ml: 2 }}>
                                                <KeyboardArrowDownIcon />
                                            </Icon>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sx={{ color: '#D84315' }}>
                                        10% loss
                                    </Grid>
                                    <Divider sx={{ my: 2 }} />

                                    <Grid container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Typography>
                                            Stolon
                                        </Typography>

                                        <Typography sx={{ display: 'flex' }}>
                                            <b>$189.00</b>
                                            <Icon sx={{ color: '#D84315', bgcolor: '#ffbba7', borderRadius: 2, ml: 2 }}>
                                                <KeyboardArrowDownIcon />
                                            </Icon>
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} sx={{ color: '#D84315' }}>
                                        10% loss
                                    </Grid>

                                </Grid>
                            </CardContent>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="text">View All <ChevronRightIcon /></Button>
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
            </ThemeProvider>
        </div>
    )
}
