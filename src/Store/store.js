import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import apiMiddleware from 'Store/middlewares/api.reducer';
import countReducer from './reducers/countReducer';
import rootReducer from './reducers';


const store = configureStore({
    reducer: rootReducer,
    middleware:[apiMiddleware],

});
export default store;
