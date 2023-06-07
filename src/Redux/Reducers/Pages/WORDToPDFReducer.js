import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  wtoPData: {},
};

export const WORDtoPDFReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WORDtoPDF_DATA:
      return {
        ...state,
        wtoPData: action.payload, // data update
      };
    default:
      return state;
  }
};
