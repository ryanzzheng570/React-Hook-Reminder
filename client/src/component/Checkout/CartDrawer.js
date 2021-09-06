import React from 'react'
import {
    Drawer,
    Typography,
    List,
    ListItem,
    Divider,
    CssBaseline,
    ListItemText
} from '@material-ui/core'
import CheckOutItems from './CheckOutItems';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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
        paddingBottom: 10,
        width: paperWidth,
    },
    bottomPush: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        width: paperWidth
    },
    emptyCart: {
        '& .MuiTypography-root': {
            textAlign: 'center',
            color: theme.palette.grey[700],
            fontSize: 22
        }
    },
    subtotal: {
        paddingTop: 25,
        paddingLeft: theme.spacing(4),
    },
    price: {
        float: 'right',
        paddingRight: theme.spacing(4)
    }
}))


//Drawer for CheckOut Cart
const CartDrawer = (props) => {
    const classes = useStyle();
    const { open, close, checkout } = props;

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
                {checkout ?
                    <>
                        <CheckOutItems items={checkout} />
                    </>
                    : (<ListItem className={classes.middlePush}>
                        <ListItemText className={classes.emptyCart}> Your cart is currently empty. </ListItemText>
                    </ListItem>)
                }
            </List>
            <div className={classes.bottomPush}>
                <Divider />
                <Typography gutterBottom className={classes.subtotal} variant='h4'>Subtotal
                    <span className={classes.price}>$88.88</span>
                </Typography>
                <Typography>
                    Taxes and shipping calculated at checkout
                </Typography>
            </div>
        </Drawer >
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(CartDrawer);
