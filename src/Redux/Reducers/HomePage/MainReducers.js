import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    mainData: {},
};

export const mainReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MAIN:
            return {
                ...state,
                mainData: action.payload // data update
            }

        default:
            return state;
    }
}