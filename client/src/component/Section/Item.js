import React from 'react'
import './index.css'
import { makeStyles } from '@material-ui/styles'
import { Grid, Box, Typography, Button } from '@material-ui/core';

const useSytle = makeStyles((theme) => ({
    root: {
        minWidth: 500,
        maxHeight: 200,
        margin: '20px 20px 10px 0',
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
    img: {
        backgroundColor: 'rgba(96, 96, 96, 0.2)'
    },
    description: {
        height: 50,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        display: '-webkit-box',
        width: 300
    }
}));

const Item = ({ name, description, labels, price, imageUrl }) => {
    const classes = useSytle();

    return (
        <Button variant='outlined' className={classes.root}>
            <Grid xl={'auto'} container>

                <Grid container direction='column' className={classes.info}>
                    <Typography className={classes.name} paragraph >{name}</Typography>
                    <Typography className={classes.description} paragraph>{description}</Typography>
                    {labels && labels.length > 0 ? (
                        <div></div>
                    ) : <></>}
                    <Typography>{price}</Typography>
                </Grid>
                <Box width={'30%'} style={{ backgroundColor: 'lightgrey' }}>
                    <img className={classes.img} alt='' />
                </Box>
            </Grid>
        </Button>
    )
}

export default Item
