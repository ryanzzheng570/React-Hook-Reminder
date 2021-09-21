import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CheckOutDrawer from '../Checkout/CartDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import NavDrawer from './NavDrawer';

const iconLeftPadding = 11;
const iconBottomPadding = 1;

const useStyles = makeStyles((theme) => ({
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

    sushi_type_icon: {
        paddingLeft: iconLeftPadding,
        paddingBottom: iconBottomPadding
    },
    cartButton: {
        marginLeft: 'auto',
        color: 'white'
    },
}));

//Navigation component based on Material UI
const Navbar = (props) => {
    const classes = useStyles();
    const { checkout } = props;
    const { items } = checkout;
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
                        <Badge badgeContent={items.length} color='secondary'>
                            <ShoppingCartOutlinedIcon style={{ fontSize: 32 }} />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <CheckOutDrawer
                open={isCartDrawerOpen}
                close={handleCheckOutClose}
            />

            <NavDrawer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}
export default connect(mapStateToProps)(Navbar);
