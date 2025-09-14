import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from "./types"

const initialState = {
  user: null, // to hold user related information
  token: localStorage.getItem('token') || null, // to hold jwt token
  loading: false,// we need spinner while confirming the data / credentials with BE
  isAuthenticated: false, // to confirm that user is already authenticated
  errors: null, // to get the form handling errors.
}

export default (state = initialState, { type, payload }) => {
  console.log('AuthReducer called with action type:', type, 'and payload:', payload);
  switch (type) {

  case USER_LOADED:
    console.log('USER_LOADED action payload:', payload);
    return { 
      ...state,
      user: payload, 
      isAuthenticated: true, 
      loading: false ,
      errors: []
    };
  case LOGIN_SUCCESS:
    console.log('LOGIN_SUCCESS action payload:', payload);
    localStorage.setItem('token', payload);
    return {
      ...state,
      token: payload, 
      loading: false, 
      isAuthenticated: true,
      errors: []
    };
  case REGISTER_SUCCESS:
    console.log('REGISTER_SUCCESS action payload:', payload);
    localStorage.setItem('token', payload);
    return {
      ...state,
      token: payload, 
      loading: false, 
      isAuthenticated: true,
      errors: []
    };

  // case 'LOGIN_FAILURE':
  //   return { ...state, loading: false, errors: payload }

  default:
    return state
  }
}
