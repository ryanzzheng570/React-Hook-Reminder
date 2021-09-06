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
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

const useStyle = makeStyles((theme) => ({
    paper: {
        width: 450
    },
    checkOutTitle: {
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    bottomPush: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        paddingBottom: 10,
        width: '100%'
    }
}))


//Drawer for CheckOut Cart
const CheckOutDrawer = (props) => {
    const classes = useStyle();
    const { isCheckOutOpen, handleCheckOutClose, checkout } = props;

    return (
        < Drawer
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
                    </>
                    : (<ListItem divider>
                        <ListItemText> Your cart is currently empty</ListItemText>
                    </ListItem>)
                }
            </List>
            <div className={classes.bottomPush}>
                <Divider />
                <Typography>Footer</Typography>
            </div>
        </Drawer >
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(CheckOutDrawer);
