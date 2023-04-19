import { actionTypes } from "../../../Types/actionTypes";

const initialState = {
    pricingData: {},
};

export const pricingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRICING:
            return {
                ...state,
                pricingData: action.payload // data update
            }

        default:
            return state;
    }
}