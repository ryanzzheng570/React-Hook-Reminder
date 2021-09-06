import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, Divider } from '@material-ui/core';
import { SUSHI_TYPES, SUSHI_TYPES_MAP } from '../../util/constants';
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import useStyles from './styles';
import CheckOutDrawer from '../Checkout/CheckOutDrawer';

const getSushiTypeIcon = (type) => {
    return SUSHI_TYPES_MAP.get(type);
}

//Navigation component based on Material UI
const Navbar = () => {
    const classes = useStyles();
    const [isCheckOutOpen, setisCheckOutOpen] = useState(false);

    const handleCheckOutOpen = () => {
        setisCheckOutOpen(true);
    };
    const handleCheckOutClose = () => {
        setisCheckOutOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">
                        Restaurant Name
                    </Typography>
                    <IconButton className={classes.cartButton} color='inherit' onClick={handleCheckOutOpen}>
                        <Badge badgeContent={1} color='secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <CheckOutDrawer
                isCheckOutOpen={isCheckOutOpen}
                handleCheckOutClose={handleCheckOutClose}
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
