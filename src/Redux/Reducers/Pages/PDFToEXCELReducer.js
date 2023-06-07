import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  PtoEData: {},
};

export const PDFtoEXCELReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PDFToEXCEL_DATA:
      return {
        ...state,
        PtoEData: action.payload, // data update
      };
    default:
      return state;
  }
};
