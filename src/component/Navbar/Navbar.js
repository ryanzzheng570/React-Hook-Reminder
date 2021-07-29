import { AppBar, Toolbar, IconButton, Typography, Button, Drawer } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { minHeight } from '@material-ui/system';

const drawerWidth = 250;
const toolbarHeight = 70;

const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            marginTop: toolbarHeight,
        },
        root: {
            display: 'flex',
        },
        toolbar: { minHeight: 70 },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    {/* <IconButton edge="start" className={useStyles().menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        Restaurant Name
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>

            {/* Drawer*/}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant='h5'>List of Item puts here</Typography>
                </div>
            </Drawer>

        </div>
    )
}

export default Navbar
