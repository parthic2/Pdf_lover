import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  ocrData: {},
};

export const ocrReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_OCR_DATA:
      return {
        ...state,
        ocrData: action.payload, 
      };
    default:
      return state;
  }
};
