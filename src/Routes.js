import React, { useEffect } from 'react';
import MainMenu from './component/MainMenu';
import { Route, Switch, withRouter } from 'react-router';
import About from './component/About';
import { connect } from 'react-redux';
import { fetchSushi } from './store/thunkCreators';


const Routes = (props) => {
    const { availableSushi, fetchSushi } = props;
    useEffect(() => {
        fetchSushi();
    }, [fetchSushi])

    return (
        <>
            <Switch>
                <Route path='/' exact component={MainMenu} />
                {/* <Route path='/reminder' component={AddReminder}/> */}
                <Route path='/about' component={About} />
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        availableSushi: state.availableSushi,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSushi() {
            dispatch(fetchSushi());
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
