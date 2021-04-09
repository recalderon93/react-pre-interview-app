import { combineReducers } from '@reduxjs/toolkit';
import uiReducer from './UI/ui.reducer';
import userReducer from './User/user.reducer';

const rootReducer = combineReducers({ ui: uiReducer, user: userReducer });

export default rootReducer;
