import React from 'react';
import {
    Drawer,
    Typography,
    List,
    ListItem,
    Divider,
    CssBaseline,
    ListItemText,
    Button
} from '@material-ui/core'
import DrawerItems from './DrawerItems';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getTotalPrice } from '../../util/utils';

const paperWidth = 450;

const useStyle = makeStyles((theme) => ({
    paper: {
        width: paperWidth
    },
    cartTitle: {
        justifyContent: 'center',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    middlePush: {
        position: "fixed",
        top: '25%',
        paddingBottom: theme.spacing(1),
        width: paperWidth,
    },
    bottomPush: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: paperWidth
    },
    emptyCart: {
        textAlign: 'center',
        color: theme.palette.grey[700],
        fontSize: 22
    },
    subtotal: {
        paddingTop: theme.spacing(2.5),
        paddingRight: theme.spacing(7.5)
    },
    price: {
        float: 'right',
    },
    btn: {
        marginBottom: theme.spacing(3),
        padding: theme.spacing(1, 2)
    }
}))



//Drawer for CheckOut Cart
const CartDrawer = (props) => {
    const classes = useStyle();
    const { open, close, checkout } = props;
    const { items } = checkout;
    const history = useHistory();

    const handleConfirmCart = () => {
        close();
        history.push("/checkout");
    }

    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={close}
            classes={{ paper: classes.paper }}
        >
            <CssBaseline />
            <List>
                <ListItem className={classes.cartTitle}>
                    <Typography className={classes.title}>SHOPPING CART</Typography>
                </ListItem>
            </List>
            <Divider />
            <List>
                {items && items.length > 0 ?
                    <>
                        <DrawerItems
                            items={items}
                        />
                        <div className={classes.bottomPush}>
                            <Divider />
                            <Typography gutterBottom className={classes.subtotal} variant='h4'>
                                Subtotal:
                                <span className={classes.price}>${getTotalPrice(items)}</span>
                            </Typography>
                            <Typography color='textSecondary' paragraph variant='body1'>
                                Taxes and shipping calculated at checkout
                            </Typography>
                            <Button
                                color='primary'
                                variant='contained'
                                className={classes.btn}
                                onClick={handleConfirmCart}
                            >
                                Confirm Cart
                            </Button>
                        </div>
                    </>
                    : (<ListItem className={classes.middlePush}>
                        <ListItemText disableTypography className={classes.emptyCart}> Your cart is currently empty. </ListItemText>
                    </ListItem>)
                }
            </List>
        </Drawer >
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(CartDrawer);
