import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    trustedData: {},
};

export const trustedReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TRUSTED_DATA:
            return {
                ...state,
                trustedData: action.payload // data update
            }

        default:
            return state;
    }
}