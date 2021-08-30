import { createStore, applyMiddleware, combineReducers } from 'redux';
import availableSushi from './availableSushi';
import thunkMiddleware from 'redux-thunk';

const appReducer = combineReducers({
    availableSushi
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));
