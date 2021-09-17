import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Grid } from '@material-ui/core';
import { checkOutStyle } from '../styles';

const CheckoutPage = () => {
    const classes = checkOutStyle();

    return (
        <div className={classes.container}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={10}>
                    <Paper>
                        <Typography variant='h4'>Sushi:</Typography>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default CheckoutPage
