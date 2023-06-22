import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  unlockData: {},
};

export const unlockReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_UNLOCK_DATA:
      return {
        ...state,
        unlockData: action.payload,
      };
    default:
      return state;
  }
};
