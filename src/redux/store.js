import { configureStore } from '@reduxjs/toolkit';
import rangeReducer from './slice';

export const store = configureStore({
    reducer: {
    range: rangeReducer,
  },
})