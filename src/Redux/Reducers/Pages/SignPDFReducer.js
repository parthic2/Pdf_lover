import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  signData: {},
};

export const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SIGN_DATA:
      return {
        ...state,
        signData: action.payload, // data update
      };
    default:
      return state;
  }
};
