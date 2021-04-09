import { combineReducers } from '@reduxjs/toolkit';
import countReducer from './countReducer';


const rootReducer = combineReducers({ count: countReducer });

export default rootReducer;
