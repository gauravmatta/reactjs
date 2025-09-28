import {
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  CREATE_PROFILE,
  EDUCATION_ERROR,
  EXPERIENCE_ERROR,
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "./types";

const initialState = {
  currentProfile: null, // to hold users current profile
  loading: true, // flag to inform processing
  error: null, // to hold the errors
  profiles: [], // to hold the multiple profiles so we used array.
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROFILE:// to update or create both.
      console.log("profile sent to be updated in reducer", payload);
    case CREATE_PROFILE:
      console.log("profile sent to be created in reducer", payload);
    case GET_PROFILE:
    case ADD_EDUCATION:
    case ADD_EXPERIENCE:
      console.log("profile data in reducer", payload);
      return { ...state, currentProfile: payload, loading: false };
    case PROFILE_ERROR:
    case EXPERIENCE_ERROR:
    case EDUCATION_ERROR:
      console.log("profile error in reducer", payload);
      return {
        ...state,
        error: payload,
        currentProfile: null,
        loading: false,
      };

    default:
      return state;
  }
};