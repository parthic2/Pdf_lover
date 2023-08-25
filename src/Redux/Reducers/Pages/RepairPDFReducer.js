import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  repairData: {},
};

export const repairReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPAIR_DATA:
      return {
        ...state,
        repairData: action.payload, 
      };
    default:
      return state;
  }
};