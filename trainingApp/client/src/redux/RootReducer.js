import { combineReducers } from "redux";

export default combineReducers({
  // your reducers go here
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
  post: postReducer,
});