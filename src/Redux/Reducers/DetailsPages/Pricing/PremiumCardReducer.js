import { actionTypes } from "../../../Types/actionTypes";

const initialState = {
    premiumData: {},
};

export const premiumDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PREMIUM:
            return {
                ...state,
                premiumData: action.payload // data update
            }

        default:
            return state;
    }
}