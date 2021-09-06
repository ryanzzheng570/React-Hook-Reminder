import React from 'react';
import SectionContainer from './Section/SectionContainer';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { rootStyle } from './styles';

const MainMenu = (props) => {
    const classes = rootStyle();
    const { sushi } = props;

    return (
        <Grid className={classes.root}>
            <SectionContainer
                name={'Maki Rolls'}
                description={'Sushi Made in rolls and sliced into round bite-size pieces'}
                sushi={sushi}
            />
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        sushi: state.availableSushi
    }
}

export default connect(mapStateToProps)(MainMenu);
