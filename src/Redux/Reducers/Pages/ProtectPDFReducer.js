import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  protectData: {},
};

export const protectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROTECT_DATA:
      return {
        ...state,
        protectData: action.payload, 
      };
    default:
      return state;
  }
};