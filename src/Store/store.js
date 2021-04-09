import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import countReducer from './reducers/countReducer';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
});
export default store;
