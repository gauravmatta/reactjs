// will perform common backend authentication logic.
// will perform rest calls.
import { registerUser } from "../services/auth.service";
import { AUTH_ERROR, REGISTER_SUCCESS } from "./types";

// will hold the changes needs to be done in the store.
export const registerAction = (formData) => async (dispatch) => {
  // dispatch : is a function provided by the store.
  // its job is to send actions to the redux store . so that reducer can update the state.
  // redux thunk will provide the same .
  try {
    const res = await registerUser(formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

