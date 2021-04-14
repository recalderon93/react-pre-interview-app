/* eslint-disable no-console */
import { configureStore } from '@reduxjs/toolkit';
import apiMiddleware from 'Store/Middlewares/api.middleware';
import triviaMiddleware from './Middlewares/trivia.middleware';
import rootReducer from './rootReducer';

export function saveToLocalStorage(state) {
  localStorage.clear();
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem('persistantState', serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem('persistantState');
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
const store = configureStore({
  reducer: rootReducer,
  middleware: [apiMiddleware, triviaMiddleware],
  preloadedState: loadFromLocalStorage(),

});

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
