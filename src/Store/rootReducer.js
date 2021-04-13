import { combineReducers } from '@reduxjs/toolkit';
import continentsReducer from './Countries/countries.reducer';
import uiReducer from './UI/ui.reducer';
import userReducer from './User/user.reducer';
import countriesApiReducer from './API/api.reducer';

const rootReducer = combineReducers(
  {
    ui: uiReducer,
    user: userReducer,
    continents: continentsReducer,
    countries: countriesApiReducer,
  },
);

export default rootReducer;
