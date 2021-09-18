import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Grid } from '@material-ui/core';
import { checkOutStyle } from '../styles';
import PageItems from './PageItems';
import { connect } from 'react-redux'

const CheckoutPage = (props) => {
    const classes = checkOutStyle();
    const { checkout } = props

    return (
        <div className={classes.container}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={10}>
                    <Paper>
                        <Typography variant='h4'>Sushi:</Typography>
                        <PageItems items={checkout} />
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(CheckoutPage);
