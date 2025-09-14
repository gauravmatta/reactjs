// will perform common backend authentication logic.
// will perform rest calls.
import { setAlert } from "../../core/redux/coreActions";
import { loadUser, registerUser } from "../services/auth.service";
import { AUTH_ERROR, REGISTER_SUCCESS, USER_LOADED } from "./types";


// api/auth : get method to load the user details
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

