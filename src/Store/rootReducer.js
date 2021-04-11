import { combineReducers } from '@reduxjs/toolkit';
import countriesReducer from './Countries/countries.reducer';
import uiReducer from './UI/ui.reducer';
import userReducer from './User/user.reducer';

const rootReducer = combineReducers(
  { ui: uiReducer, user: userReducer, countries: countriesReducer },
);

export default rootReducer;
