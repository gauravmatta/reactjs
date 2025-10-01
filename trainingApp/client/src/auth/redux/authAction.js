// will perform common backend authentication logic.
// will perform rest calls.
import { setAlert } from "../../core/redux/coreActions";
import { CLEAR_PROFILE } from "../../profile/redux/types";
import { loadUser, loginUser, registerUser } from "../services/auth.service";
import { AUTH_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, USER_LOADED } from "./types";

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOGOUT });
  dispatch({
    type: CLEAR_PROFILE
  });
}
export const loginAction = (formdata) => async (dispatch) => {
  try {
    console.log('loginAction called');
    const res = await loginUser(formdata);
    console.log('Response from loginAction:', res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res
    });
    // success alert
    dispatch(setAlert('Login Successful', 'success'));
    // load user details after registration
    dispatch(loadUserDetailsAction());
  } catch (err) {
    const errors = err.data;
    console.log('Errors in loginAction:', JSON.stringify(errors));
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    console.log('Errors in loginAction:', JSON.stringify(errors));
  }
}

export const loadUserDetailsAction = () => async (dispatch) => {
  // dispatch : is a function provided by the store.
  // its job is to send actions to the redux store . so that reducer can update the state.
  // redux thunk will provide the same .
  try {
    console.log('loadUserDetailsAction called');
    const res = await loadUser();
    console.log('Response from loadUserDetailsAction:', res);
    dispatch({
      type: USER_LOADED,
      payload: res
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// will hold the user changes needs to be done in the store.
export const registerAction = (formData) => async (dispatch) => {
  // dispatch : is a function provided by the store.
  // its job is to send actions to the redux store . so that reducer can update the state.
  // redux thunk will provide the same .
  try {
    console.log('registerAction called with formData:', formData);
    const res = await registerUser(formData);
    console.log('Dispatching REGISTER_SUCCESS with payload:', res);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res,
    });
    // success alert
    dispatch(setAlert('Registration Successful', 'success'));
    // load user details after registration
    dispatch(loadUserDetailsAction());
  } catch (err) {
    const errors = err.data;
    console.log('Errors in registerAction:', JSON.stringify(errors));
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

