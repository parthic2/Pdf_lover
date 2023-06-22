import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  watermarkData: {},
};

export const addWatermarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WATERMARK_DATA:
      return {
        ...state,
        watermarkData: action.payload, 
      };
    default:
      return state;
  }
};
