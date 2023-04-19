import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    toolsData: []
};

export const CFromPToolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CFROMP_TOOLS:
            return {
                ...state,
                toolsData: action.payload // data update
            }
        default:
            return state;
    }
} 