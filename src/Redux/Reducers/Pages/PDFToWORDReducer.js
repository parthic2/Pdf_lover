import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  PtoWData: {},
};

export const PDFtoWORDReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PDFToWORD_DATA:
      return {
        ...state,
        PtoWData: action.payload, // data update
      };
    default:
      return state;
  }
};
