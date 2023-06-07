import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  organizeData: {},
};

export const organizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORGANIZE_DATA:
      return {
        ...state,
        organizeData: action.payload, // data update
      };
    default:
      return state;
  }
};
