import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    mainData: {},
    isLoading: false,
};

export const mainReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MAIN:
            return {
                ...state,
                mainData: action.payload,
                isLoading: false,
            };

        case actionTypes.FETCH_MAIN_START:
            return {
                ...state,
                isLoading: true,
            };

        default:
            return state;
    }
};
