import { setAlert } from "../../core/redux/coreActions";
import { createOrUpdateProfile, getCurrentUserProfile } from "../services/profile.service";
import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "./types";

export const getCurrentUserProfileAction = () => async (dispatch) => {
  try {
    console.log("Fetching current user profile...");
    const data = await getCurrentUserProfile();
    // console.log("Profile data fetched:", res);
    // const data = await res.json();
    dispatch({
      type: GET_PROFILE,
      payload: data
    });
  } catch (error) {
    console.error("Error fetching profile:", JSON.stringify(error));
    dispatch({ type: PROFILE_ERROR, payload: error });
  }
};

export const createOrUpdateProfileAction = (profileData, edit = false) => async (dispatch) => {
  try {
    console.log(edit ? "Updating profile..." : "Creating profile...", profileData);
    const data = await createOrUpdateProfile(profileData);
    // console.log("Profile created/updated:", res);
    // const data = await res.json();
    dispatch({
      type: UPDATE_PROFILE,
      payload: data
    });
    console.log("Profile successfully created/updated:", data);
    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));    
  } catch (error) {
    console.error("Error creating/updating profile:", JSON.stringify(error));
    if(error.errors) {
      error.errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({ type: PROFILE_ERROR, payload: { msg: error.statusText,status: error.status } });
  }
};
