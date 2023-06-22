import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  PtoPaData: {},
};

export const PDFtoPDFaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PDFToPDFa_DATA:
      return {
        ...state,
        PtoPaData: action.payload,
      };
    default:
      return state;
  }
};
