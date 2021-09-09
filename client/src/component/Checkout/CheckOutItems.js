import React from 'react'
import {
    ListItem,
    ListItemText,
    Typography,
    IconButton,
    Box,
    Button,
    Badge
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { modifyCartSushi, removeSushiFromCart } from '../../store/utils/thunkCreators'

const useStyles = makeStyles((theme) => ({
    text: {
        wordWrap: 'break-word'
    },
    total: {
        float: 'right'
    },
    quantityContainer: {
        display: 'flex',
        border: '1px solid',
        marginRight: theme.spacing(1)

    },
    quantity: {
        padding: theme.spacing(0.8, 0.2, 0, 0.2)
    },
    icon: {
        fontSize: 15
    },
    remove: {
        marginLeft: theme.spacing(0.8),
        marginBottom: theme.spacing(0.3)
    }
}));

const CheckOutItems = (props) => {
    const classes = useStyles();
    const { modifyCartSushi, removeSushiFromCart, items } = props

    const handleMinusClick = (checkoutItemId, currQuantity) => {
        modifyCartSushi(checkoutItemId, currQuantity - 1);
    }

    const handlePlusClick = (checkoutItemId, currQuantity) => {
        modifyCartSushi(checkoutItemId, currQuantity + 1);
    }

    const handleRemove = (checkoutItemId) => {
        removeSushiFromCart(checkoutItemId);
    }

    return (
        <>
            {items.map((item, index) => (
                <ListItem button disableRipple key={index}>
                    <Box className={classes.quantityContainer}>
                        <IconButton
                            onClick={() => handleMinusClick(item.checkoutItemId, item.quantity)}
                            disabled={item.quantity > 1 ? false : true}
                        >
                            <RemoveIcon className={classes.icon} />
                        </IconButton>
                        <Typography className={classes.quantity}>{item.quantity}</Typography>
                        <IconButton
                            onClick={() => handlePlusClick(item.checkoutItemId, item.quantity)}
                        >
                            <AddIcon className={classes.icon} />
                        </IconButton>
                    </Box>

                    <ListItemText className={classes.text}>
                        <Typography>
                            <Badge color='secondary' badgeContent={item.specialRequest ? "R" : null}>
                                {item.name}
                            </Badge>
                            <span className={classes.total}> ${item.totalPrice}</span>
                        </Typography>
                    </ListItemText>
                    <Button onClick={() => handleRemove(item.checkoutItemId)} color='secondary' className={classes.remove} size='small'>Remove</Button>
                </ListItem>
            ))}
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        modifyCartSushi: (checkoutItemId, quantity) => {
            dispatch(modifyCartSushi(checkoutItemId, quantity));
        },
        removeSushiFromCart: (checkoutItemId) => {
            dispatch(removeSushiFromCart(checkoutItemId));
        }
    };
};

export default connect(null, mapDispatchToProps)(CheckOutItems);