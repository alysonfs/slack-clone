import { configureStore } from '@reduxjs/toolkit';
import appReducer from './features/appSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer
  },
});
