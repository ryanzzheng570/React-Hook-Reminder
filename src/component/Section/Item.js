import React from 'react'
import './index.css'
import { makeStyles } from '@material-ui/styles'
import { Grid, Box, Typography } from '@material-ui/core';

const useSytle = makeStyles((theme) => ({
    root: {
        border: '1px solid rgba(96, 96, 96, 0.2)',
        marginTop: 15,
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'unset',
        width: '33%'
    },
    info: {
        maxWidth: '70%',
        minWidth: 0,
        padding: 20
    }
}));

const Item = ({ name, description, labels, price }) => {
    const classes = useSytle();

    return (
        <Grid container className={classes.root}>
            <Grid container direction='column' className={classes.info}>
                <Typography>{name}</Typography>
                <Typography>{description}</Typography>
                {labels && labels.length > 0 ? (
                    <div></div>
                ) : <></>}
                <span>{price}</span>
            </Grid>
            <Box>
                <img alt='' />
            </Box>
        </Grid>
    )
}

export default Item
