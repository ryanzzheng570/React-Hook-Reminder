import React from 'react'
import './index.css'
import { makeStyles } from '@material-ui/styles'
import { Grid, Box, Typography } from '@material-ui/core';

const useSytle = makeStyles((theme) => ({
    root: {
        border: '1px solid rgba(96, 96, 96, 0.2)',
        marginTop: 15,
        // overflow: 'hidden',
        // position: 'relative',
        // textAlign: 'unset',
        width: 500,
        marginRight: 20
    },
    info: {
        maxWidth: '70%',
        minWidth: 0,
        padding: 20
    },
    name: {
        fontWeight: 'bold'
    },
    img: {
        backgroundColor: 'rgba(96, 96, 96, 0.2)'
    }
}));

const Item = ({ name, description, labels, price, imageUrl }) => {
    const classes = useSytle();

    return (
        <Grid xl={'auto'} container className={classes.root}>
            <Grid container direction='column' className={classes.info}>
                <Typography className={classes.name} paragraph >{name}</Typography>
                <Typography paragraph>{description}</Typography>
                {labels && labels.length > 0 ? (
                    <div></div>
                ) : <></>}
                <Typography>{price}</Typography>
            </Grid>
            <Box width={'30%'} color='textSecondary'>
                <img className={classes.img} alt='' />
            </Box>
        </Grid>
    )
}

export default Item
