import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  PtoPData: {},
};

export const POWERtoPDFReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POWERToPDF_DATA:
      return {
        ...state,
        PtoPData: action.payload, // data update
      };
    default:
      return state;
  }
};
