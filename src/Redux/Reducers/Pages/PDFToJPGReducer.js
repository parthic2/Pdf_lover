import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  PtoJData: {},
};

export const PDFtoJPGReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PDFToJPG_DATA:
      return {
        ...state,
        PtoJData: action.payload, // data update
      };
    default:
      return state;
  }
};
