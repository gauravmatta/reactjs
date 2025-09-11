import { SET_ALERT } from "./types"

const initialState = []

export default (state = initialState, action) => {
   const { type, payload } = action
  switch (type) {
    case SET_ALERT:
        return [...state, payload];
    case REMOVE_ALERT:
        // payload will bring the id of the alert to be removed.
        return state.filter((alert) => alert.id !== payload);
    default:
        return state;
  }
}
