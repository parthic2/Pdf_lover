import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    toolsData: []
};

export const securityToolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SECURITY_TOOLS:
            return {
                ...state,
                toolsData: action.payload // data update
            }
        default:
            return state;
    }
} 