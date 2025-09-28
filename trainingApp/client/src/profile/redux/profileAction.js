import { setAlert } from "../../core/redux/coreActions";
import { addEducation, addExperience, createOrUpdateProfile, getCurrentUserProfile } from "../services/profile.service";
import { ADD_EDUCATION, ADD_EXPERIENCE, EDUCATION_ERROR, EXPERIENCE_ERROR, GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE } from "./types";

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
    if (error.errors) {
      error.errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({ type: PROFILE_ERROR, payload: { msg: error.statusText, status: error.status } });
  }
};

export const addEducationAction = (formData, edit = false) => async (dispatch) => {
  try {
    console.log("Adding education...", formData);
    const data = await addEducation(formData);
    dispatch({
      type: ADD_EDUCATION,
      payload: data
    });
    console.log("Education successfully added:", data);
    dispatch(setAlert(edit ? 'Education Updated' : 'Education Added', 'success'));
  } catch (error) {
    console.error("Error adding education:", JSON.stringify(error));
    if (error.errors) {
      error.errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({ type: EDUCATION_ERROR, payload: { msg: error.statusText, status: error.status } });
  }
}

export const addExperienceAction = (formData) => async (dispatch) => {
  try {
    console.log("Adding experience...", formData);
    const data = await addExperience(formData);
    dispatch({
      type: ADD_EXPERIENCE,
      payload: data
    });
    console.log("Experience successfully added:", data);
    dispatch(setAlert('Experience Added', 'success'));
  } catch (error) {
    console.error("Error adding experience:", JSON.stringify(error));
    if (error.errors) {
      error.errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
    dispatch({ type: EXPERIENCE_ERROR, payload: { msg: error.statusText, status: error.status } });
  }
}