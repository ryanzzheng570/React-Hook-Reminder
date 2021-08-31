import React from 'react';
import SectionContainer from './Section/SectionContainer';
import Item from './Section/Item';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyle = makeStyles(() => ({
    root: {
        marginTop: 70,
        marginLeft: 250,
        padding: 20,
        fontFamily: 'inherit',
        backgroundColor: 'white'
    }
}));

const MainMenu = () => {
    const classes = useStyle();

    const itemOne = () => {
        return (<Item name={'Spicy Salmon Roll'} description={'Salmon come with spicy mayo, green onion, cryispy flaske and masago '} />)
    }

    return (
        <Grid className={classes.root}>
            <SectionContainer
                name={'Sashimi'}
                description={'Raw Fish(5 pieces/order)'}
                ItemOne={() => itemOne()}
            />
        </Grid>
    )
}

export default MainMenu
