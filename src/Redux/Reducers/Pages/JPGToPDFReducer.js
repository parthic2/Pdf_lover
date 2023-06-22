import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  jtoPData: {},
};

export const JPGtoPDFReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JPGtoPDF_DATA:
      return {
        ...state,
        jtoPData: action.payload, 
      };
    default:
      return state;
  }
};
