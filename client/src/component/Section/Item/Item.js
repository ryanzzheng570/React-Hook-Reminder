import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import {
    Grid,
    Box,
    Typography,
    Button
} from '@material-ui/core';
import DetailedItemModal from './DetailedItemModal';

const useSytle = makeStyles((theme) => ({
    root: {
        minWidth: 500,
        maxHeight: 200,
        margin: theme.spacing(2, 2, 1, 0),
    },
    info: {
        maxWidth: '70%',
        minWidth: 0,
        padding: 20,
        '& p': {
            textAlign: 'left'
        },
    },
    name: {
        fontWeight: 'bold'
    },
    noPadding: {
        padding: 0
    },
    img: {
        height: 200,
        width: '100%',
        objectFit: 'cover',

    },
    description: {
        height: 50,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
        width: 300
    },
    imageContainer: {
        height: 202,
        width: '30%'
    }
}));

const Item = (props) => {
    const classes = useSytle();
    const [isOpen, setIsOpen] = useState(false);
    const { name, description, labels, price, imageUrl } = props;

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Button
                variant='outlined'
                className={classes.root}
                onClick={handleOpen}
                classes={{
                    root: classes.noPadding,
                }}
            >
                <Grid xl={'auto'} container>
                    <Grid container direction='column' className={classes.info}>
                        <Typography className={classes.name} paragraph >{name}</Typography>
                        <Typography className={classes.description} paragraph>{description}</Typography>
                        {labels && labels.length > 0 ? (
                            <div></div>
                        ) : <></>}
                        <Typography>{price}</Typography>
                    </Grid>
                    <Box className={classes.imageContainer}>
                        <img className={classes.img} src={imageUrl} alt='' height='195px' />
                    </Box>
                </Grid>
            </Button>
            <DetailedItemModal
                open={isOpen}
                handleClose={handleClose}
                name={name}
                description={description}
                price={price}
            />
        </>
    )
}

export default Item
