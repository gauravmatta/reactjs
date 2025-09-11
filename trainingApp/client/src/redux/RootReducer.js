import { combineReducers } from "redux";
import authReducer from "../auth/redux/authReducer";
import coreReducer from "../core/redux/coreReducer";

export default combineReducers({
  // your reducers go here
  authReducer,
  coreReducer
  // user: userReducer,
  // profile: profileReducer,
  // post: postReducer,
});