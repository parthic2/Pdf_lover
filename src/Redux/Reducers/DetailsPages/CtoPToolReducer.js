import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    toolsData: []
};

export const CtoPToolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CTOP_TOOLS:
            return {
                ...state,
                toolsData: action.payload // data update
            }
        default:
            return state;
    }
} 