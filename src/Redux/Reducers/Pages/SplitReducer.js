import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  splitData: {},
};

export const splitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SPLIT_DATA:
      return {
        ...state,
        splitData: action.payload,
      };
    default:
      return state;
  }
};
