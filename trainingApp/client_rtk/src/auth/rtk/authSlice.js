import { createSlice } from "@reduxjs/toolkit";

const TOKEN_KEY = 'dc_token';

const initialState = {
  user: null,
  token: localStorage.getItem(TOKEN_KEY) || null,
  status: 'idle',
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {token,user} = action.payload || {};
      state.token = token || null;
      state.user = user || null;
      state.status = 'authenticated';
      state.error = null;
      if (token) localStorage.setItem(TOKEN_KEY, token);
    },
    setUser: (state, action) => {
      state.user = action.payload || null;
      state.status = 'authenticated';
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.status = 'idle';
      state.error = null;
      localStorage.removeItem(TOKEN_KEY);
    },
    setError: (state, action) => {
      state.error = action.payload || "Error";
      state.status = "error";
    },
    setLoading: (state) => {
      state.status = "loading";
      state.error = null;
    }
  },
});

export const { setCredentials, setUser, clearAuth, setError, setLoading } = authSlice.actions;

export default authSlice.reducer;
