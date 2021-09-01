import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Items from './Items';

const useSytle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(250, 250, 250)',
        padding: 20,
        borderRadius: 12,
        border: '1px solid rgb(224, 224, 224)'
    },
    description: {
        marginTop: 10,
    }
}));

const SectionContainer = ({ name, description, sushi }) => {
    const classes = useSytle();

    return (
        <Grid className={classes.root}>
            <Typography variant='h4'>{name}</Typography>
            <Typography className={classes.description}>{description}</Typography>
            <Grid container>
                <Items sushi={sushi} />
            </Grid>
        </Grid>
    )
}

export default SectionContainer
