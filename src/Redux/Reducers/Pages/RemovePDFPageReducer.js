import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  removePageData: {},
};

export const removePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REMOVEPAGE_DATA:
      return {
        ...state,
        removePageData: action.payload, // data update
      };
    default:
      return state;
  }
};
