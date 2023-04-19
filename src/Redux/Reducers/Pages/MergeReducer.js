import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  mergeData: {},
};

export const mergeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MERGE_DATA:
      return {
        ...state,
        mergeData: action.payload, // data update
      };

    default:
      return state;
  }
};
