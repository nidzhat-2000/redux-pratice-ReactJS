import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import webSetReducer from './webSet';

export default configureStore({
  reducer: {
    counter: counterReducer,
    webSet: webSetReducer,
  },
});
