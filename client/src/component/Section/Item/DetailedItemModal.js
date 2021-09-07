import React, { useState } from 'react'
import {
    Modal,
    Fade,
    Typography,
    Box,
    TextField,
    IconButton,
    Grid,
    Button,
    Divider
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

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
        backgroundColor: 'rgb(255,166,0)'
    }
}));

const DetailedItemModal = (props) => {
    const classes = useSytle();
    const { name, description, labels, open, handleClose, price } = props;
    const [specialRequest, setSpecialRequest] = useState('');
    const [quantity, setQuantity] = useState(1);

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
                        <form>
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
                                label='Special Request'
                                placeholder='Please leave down any special request(e.g. allergy)'
                                multiline
                                row={10}
                                fullWidth
                                value={specialRequest}
                            />
                            <Grid className={classes.submit} container justifyContent='space-between' alignItems='flex-end'>
                                <Box className={classes.quantityContainer}>
                                    <IconButton><RemoveIcon /></IconButton>
                                    <Typography className={classes.quantity}>{quantity}</Typography>
                                    <IconButton><AddIcon /></IconButton>
                                </Box>
                                <Box>
                                    <Button
                                        color='primary'
                                        variant='contained'
                                        className={classes.btn}
                                    >
                                        Add to my order ${price * quantity}
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

export default DetailedItemModal

