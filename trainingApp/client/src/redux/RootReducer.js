import { combineReducers } from "redux";
import authReducer from "../auth/redux/authReducer";

export default combineReducers({
  // your reducers go here
  auth: authReducer
  // user: userReducer,
  // profile: profileReducer,
  // post: postReducer,
});