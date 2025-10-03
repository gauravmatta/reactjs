import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/api'; // Updated to use proxy

export const authApi = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('x-auth-token', `${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    credentials: 'include' // Include cookies for CSRF protection
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      })
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/users',
        method: 'POST',
        body: userData
      })
    }),
    loadMe: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET'
      })
    })
  })
});
export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useLazyLoadMeQuery } = authApi;
