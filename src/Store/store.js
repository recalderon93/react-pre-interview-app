import { configureStore } from '@reduxjs/toolkit';
import apiMiddleware from 'Store/Middlewares/api.middleware';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [apiMiddleware],
});
export default store;
