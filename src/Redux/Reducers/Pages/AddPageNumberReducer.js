import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  addPgNoData: {},
};

export const addPgNumReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ADDPGNUM_DATA:
      return {
        ...state,
        addPgNoData: action.payload, // data update
      };
    default:
      return state;
  }
};
