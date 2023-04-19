import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  editData: {},
};

export const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EDIT_DATA:
      return {
        ...state,
        editData: action.payload, // data update
      };
    default:
      return state;
  }
};
