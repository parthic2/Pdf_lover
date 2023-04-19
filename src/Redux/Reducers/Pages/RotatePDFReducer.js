import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  rotateData: {},
};

export const rotateReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ROTATE_DATA:
      return {
        ...state,
        rotateData: action.payload, // data update
      };
    default:
      return state;
  }
};
