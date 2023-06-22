import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    premiumData: {},
};

export const premiumReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PREMIUM_DATA:
            return {
                ...state,
                premiumData: action.payload 
            }

        default:
            return state;
    }
}