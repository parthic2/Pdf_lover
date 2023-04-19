import { actionTypes } from "../../Types/actionTypes";

const initialState = {
    topicData:{}
};

export const toolsTopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOOLS_TOPIC:
            return {
                ...state,
                topicData: action.payload // data update
            }
        default:
            return state;
    }
} 