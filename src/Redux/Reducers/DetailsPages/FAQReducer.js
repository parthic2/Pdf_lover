import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    faqData: {}
};

export const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAQ:
            return {
                ...state,
                faqData: action.payload // data update
            }
        default:
            return state;
    }
} 