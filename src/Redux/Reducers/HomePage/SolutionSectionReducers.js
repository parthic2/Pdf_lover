import { actionTypes } from "../../Types/actionTypes";

const initialState = {
  solutionData: [],
};

export const SolutionSliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SOLUTION_DATA:
      return {
        ...state,
        solutionData: action.payload, // data update
      };

    default:
      return state;
  }
};
