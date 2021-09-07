import { createStore, applyMiddleware, combineReducers } from 'redux';
import availableSushi from './availableSushi';
import thunkMiddleware from 'redux-thunk';
import checkout from './checkout'

const appReducer = combineReducers({
    availableSushi,
    checkout
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
