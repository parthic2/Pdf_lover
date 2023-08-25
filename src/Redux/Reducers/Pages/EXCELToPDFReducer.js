import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  EtoPData: {},
};

export const EXCELtoPDFReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EXCELToPDF_DATA:
      return {
        ...state,
        EtoPData: action.payload, 
      };
    default:
      return state;
  }
};