import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../src/auth/rtk/authAPI";
import authReducer from "../src/auth/rtk/authSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(authApi.middleware),
});