import { combineReducers } from '@reduxjs/toolkit';
import continentsReducer from './Countries/countries.reducer';
import uiReducer from './UI/ui.reducer';
import userReducer from './User/user.reducer';
import countriesApiReducer from './API/api.reducer';
import triviaReducer from './Trivia/trivia.reducers';

const rootReducer = combineReducers(
  {
    ui: uiReducer,
    user: userReducer,
    continents: continentsReducer,
    countries: countriesApiReducer,
    trivia: triviaReducer,
  },
);

export default rootReducer;
