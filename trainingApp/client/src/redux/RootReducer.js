import { combineReducers } from "redux";
import authReducer from "../auth/redux/authReducer";
import coreReducer from "../core/redux/coreReducer";
import profileReducer from "../profile/redux/profileReducer";

export default combineReducers({
  // your reducers go here
  authReducer,
  coreReducer,
  profileReducer
});