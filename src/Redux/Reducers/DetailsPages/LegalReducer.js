import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    legalData: {}
};

export const legalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LEGAL:
            return {
                ...state,
                legalData: action.payload // data update
            }
        default:
            return state;
    }
} 