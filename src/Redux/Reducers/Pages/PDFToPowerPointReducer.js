import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  PtoPData: {},
};

export const PDFtoPOWERReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PDFToPOWER_DATA:
      return {
        ...state,
        PtoPData: action.payload, // data update
      };
    default:
      return state;
  }
};
