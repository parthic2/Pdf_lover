import { actionTypes } from "../../../Types/actionTypes";

const initialState = {
    freeData: {},
};

export const freeDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FREE_DATA:
            return {
                ...state,
                freeData: action.payload // data update
            }

        default:
            return state;
    }
}