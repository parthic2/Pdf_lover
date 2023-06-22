import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    footerData: {}
};

export const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FOOTER:
            return {
                ...state,
                footerData: action.payload 
            }
        default:
            return state;
    }
} 