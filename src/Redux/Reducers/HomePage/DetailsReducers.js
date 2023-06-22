import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    detailsData: []
};

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DETAILS:
            return {
                ...state,
                detailsData: action.payload
            }
        default:
            return state;
    }
}