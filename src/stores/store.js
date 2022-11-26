import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import webSetReducer from './webSet';
import authReducer from './auth';

export default configureStore({
  reducer: {
    counter: counterReducer,
    webSet: webSetReducer,
    auth: authReducer,
  },
});
