import { REGISTER_SUCCESS } from "./types"

const initialState = {
  user: null, // to hold user related information
  loading: false,// we need spinner while confirming the data / credentials with BE
  isAuthenticated: false, // to confirm that user is already authenticated
  errors: null, // to get the form handling errors.
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER_SUCCESS:
    return {
      ...state,
      token: payload, 
      loading: false, 
      isAuthenticated: true,
      errors: []
    };

  case 'LOGIN_SUCCESS':
    return { ...state, token: payload, loading: false, isAuthenticated: true, user: payload.user }

  case 'LOGIN_FAILURE':
    return { ...state, loading: false, errors: payload }

  default:
    return state
  }
}
