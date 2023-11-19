import { ADDED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      break;

    default:
      return state;
  }
};

export default reducer;
