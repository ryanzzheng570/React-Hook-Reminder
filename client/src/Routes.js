import React, { useEffect } from 'react';
import MainMenu from './component/MainMenu';
import { Route, Switch, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchSushi } from './store/utils/thunkCreators';
import CheckOut from './component/Checkout/CheckOut';


const Routes = (props) => {
    const { fetchSushi } = props;
    useEffect(() => {
        fetchSushi();
    }, [fetchSushi])

    return (
        <>
            <Switch>
                <Route path='/' exact component={MainMenu} />
                <Route path='/checkout' component={CheckOut} />
                {/* <Route path='/reminder' component={AddReminder}/> */}
                {/* <Route path='/about' component={About} /> */}
            </Switch>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSushi() {
            dispatch(fetchSushi());
        },
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Routes));
