import { actionTypes } from "../../../Types/actionTypes";

const initialState = {
    businessData: {},
};

export const businessDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BUSINESS_DATA:
            return {
                ...state,
                businessData: action.payload // data update
            }

        default:
            return state;
    }
}