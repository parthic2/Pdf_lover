import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  compressData: {},
};

export const compressReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPRESS_DATA:
      return {
        ...state,
        compressData: action.payload, 
      };
    default:
      return state;
  }
};