import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, Divider, Link } from '@material-ui/core';
import { SUSHI_TYPES, SUSHI_TYPES_MAP } from '../../util/constants';
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';
import CheckOutItems from '../Checkout/CheckOutItems';
import useStyles from './styles';

const getSushiTypeIcon = (type) => {
    return SUSHI_TYPES_MAP.get(type);
}

//Navigation component based on Material UI
const Navbar = (props) => {
    const classes = useStyles();
    const { checkout } = props
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
            {/* Drawer for checkout */}
            <Drawer
                anchor='right'
                open={isCheckOutOpen}
                onClose={handleCheckOutClose}
                classes={{ paper: classes.paper }}
            >
                <CssBaseline />
                <List>
                    <ListItem className={classes.checkOutTitle}>
                        <Typography className={classes.title}>SHOPPING CART</Typography>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {checkout ?
                        <>
                            <CheckOutItems items={checkout} />
                            <ListItem button><Link href="/checkout"></Link></ListItem>
                        </>
                        : (<ListItem divider>
                            <ListItemText> Your cart is currently empty</ListItemText>
                        </ListItem>)
                    }
                    {/* <ListItem button>
                        Check out
                    </ListItem> */}
                </List>
                <div className={classes.bottomPush}>
                    <Divider />
                    <Typography>Footer</Typography>
                </div>
            </Drawer>
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

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}


export default connect(mapStateToProps)(Navbar);
