import React, { useState, useMemo } from 'react'
import {
    Modal,
    Fade,
    Typography,
    Box,
    TextField,
    IconButton,
    Grid,
    Button,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { addSushiToCart } from '../../../store/utils/thunkCreators';

const useSytle = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        maxWidth: 750,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    closeButton: {
        marginLeft: 'auto',
    },
    name: {
        paddingTop: theme.spacing(1)
    },
    quantityContainer: {
        display: 'flex',
        border: '1px solid'
    },
    quantity: {
        padding: theme.spacing(1.3, 1, 0, 1)
    },
    submit: {
        marginTop: theme.spacing(4)
    },
    btn: {
        padding: theme.spacing(1.2, 3),
    }
}));

const DetailedItemModal = (props) => {
    const classes = useSytle();
    const {
        name,
        description,
        labels,
        open,
        handleClose,
        price,
        addSushiToCart,
        checkout
    } = props;

    const [specialRequest, setSpecialRequest] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleMinusClick = () => {
        setQuantity(quantity - 1);
    }

    const handlePlusClick = () => {
        setQuantity(quantity + 1);
    }

    const getTotal = (price, quantity) => {
        return Math.round(price * quantity * 100) / 100;
    }

    const memoizedTotal = useMemo(() => getTotal(price, quantity), [price, quantity])

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            checkoutItemId: checkout.length + 1,
            name: props.name,
            quantity: quantity,
            specialRequest: specialRequest,
            singlePrice: price,
            totalPrice: memoizedTotal
        }

        handleClose();
        addSushiToCart(order);
        setSpecialRequest('');
        setQuantity(1);
    }

    const handleSpecialRequest = (e) => {
        setSpecialRequest(e.target.value)
    }

    return (
        <>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                className={classes.modal}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <form onSubmit={handleSubmit}>
                            <Grid container>
                                <Typography gutterBottom className={classes.name} id='spring-modal-title' variant='h4'>
                                    {name}
                                </Typography>
                                <IconButton onClick={handleClose} className={classes.closeButton}>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                            {labels && labels.length > 0 ? (
                                <Box></Box>
                            ) : <></>}
                            <Typography id='spring-modal-description' paragraph>
                                {description}
                            </Typography>
                            <TextField
                                label='Special Requests'
                                placeholder='Please leave down any special request(e.g. allergy)'
                                multiline
                                row={10}
                                fullWidth
                                color='secondary'
                                value={specialRequest}
                                onChange={handleSpecialRequest}
                            />
                            <Grid className={classes.submit} container justifyContent='space-between' alignItems='flex-end'>
                                <Box className={classes.quantityContainer}>
                                    <IconButton disabled={quantity > 1 ? false : true} onClick={handleMinusClick}><RemoveIcon /></IconButton>
                                    <Typography className={classes.quantity}>{quantity}</Typography>
                                    <IconButton onClick={handlePlusClick}><AddIcon /></IconButton>
                                </Box>
                                <Box>
                                    <Button
                                        type='submit'
                                        color='primary'
                                        variant='contained'
                                        className={classes.btn}
                                    >
                                        Add to my order ${memoizedTotal}
                                    </Button>
                                </Box>
                            </Grid>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSushiToCart: (order) => {
            dispatch(addSushiToCart(order));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedItemModal);

