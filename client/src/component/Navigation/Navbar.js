import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, Divider } from '@material-ui/core';
import { SUSHI_TYPES, SUSHI_TYPES_MAP } from '../../util/constants';
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import CheckOutDrawer from '../Checkout/CartDrawer';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;
const toolbarHeight = 70;
const iconLeftPadding = 11;
const iconBottomPadding = 1;

const useStyles = makeStyles((theme) => ({
    navDrawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: toolbarHeight,
    },
    root: {
        flexGrow: 1,

    },
    appBar: {
        backgroundColor: 'rgb(255,166,0)'
    },
    toolbar: { minHeight: 70 },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    icon: {
        paddingLeft: iconLeftPadding,
    },
    sushi_type_icon: {
        paddingLeft: iconLeftPadding,
        paddingBottom: iconBottomPadding
    },
    cartButton: {
        marginLeft: 'auto',
        color: 'white'
    },
}));

const getSushiTypeIcon = (type) => {
    return SUSHI_TYPES_MAP.get(type);
}

//Navigation component based on Material UI
const Navbar = () => {
    const classes = useStyles();
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

    const handleCheckOutOpen = () => {
        setIsCartDrawerOpen(true);
    };
    const handleCheckOutClose = () => {
        setIsCartDrawerOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">
                        Ryan's Sushi Restaurant
                    </Typography>
                    <IconButton className={classes.cartButton} onClick={handleCheckOutOpen}>
                        <Badge badgeContent={1} color='secondary'>
                            <ShoppingCartOutlinedIcon style={{ fontSize: 32 }} />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <CheckOutDrawer
                open={isCartDrawerOpen}
                close={handleCheckOutClose}
            />

            {/* Drawer for Menu Navigation*/}
            <Drawer
                className={classes.navDrawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <CssBaseline />
                <List>
                    <ListItem button key={"MainMenu"}>
                        <ListItemIcon className={classes.icon}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"MainMenu"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {SUSHI_TYPES.map((sushiType) => (
                        <ListItem button key={sushiType}>
                            <ListItemIcon className={classes.sushi_type_icon}>
                                {getSushiTypeIcon(sushiType)}
                            </ListItemIcon>
                            <ListItemText primary={sushiType} />
                        </ListItem>
                    )
                    )}
                </List>
                <Divider />
                <List>
                    <ListItem button key={"Info"}>
                        <ListItemIcon className={classes.icon}>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Info"} />
                    </ListItem>
                </List>
            </Drawer>

        </div>
    )
}

export default Navbar;
