import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    toolsData: []
};

export const optimizeToolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_OPTIMIZE_TOOLS:
            return {
                ...state,
                toolsData: action.payload // data update
            }
        default:
            return state;
    }
} 