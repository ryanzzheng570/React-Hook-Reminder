import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { rootStyle } from '../styles';

const CheckOut = () => {
    const classes = rootStyle();

    return (
        <div className={classes.root}>
            <Typography variant='h4'>Page on the way</Typography>
        </div>
    )
}

export default CheckOut
