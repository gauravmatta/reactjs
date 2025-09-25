import { getCurrentUserProfile } from "../services/profile.service";
import { GET_PROFILE, PROFILE_ERROR } from "./types";

export const getCurrentUserProfileAction = () => async (dispatch) => {
  try {
    console.log("Fetching current user profile...");
    const res = await getCurrentUserProfile();
    console.log("Profile data fetched:", res);
    const data = await res.json();
    dispatch({
      type: GET_PROFILE,
      payload: data
    });
  } catch (error) {
    console.error("Error fetching profile:", JSON.stringify(error));
    dispatch({ type: PROFILE_ERROR, payload: error });
  }
};
