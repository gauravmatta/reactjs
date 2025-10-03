import { configureStore } from '@reduxjs/toolkit';
import { authAPI } from '../src/auth/rtk/authAPI';
import authReducer from '../src/auth/rtk/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authAPI.reducerPath]: authAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authAPI.middleware)
});