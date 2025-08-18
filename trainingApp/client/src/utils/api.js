import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(
  config => {
    // Add any custom headers or logic here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = `${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default API;
