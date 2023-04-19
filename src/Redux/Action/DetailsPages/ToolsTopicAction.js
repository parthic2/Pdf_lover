import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getToolsTopicApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.topic);

        dispatch({
            type: actionTypes.FETCH_TOOLS_TOPIC,
            payload: data.topic,
        });
    };
};

// with redux
// export const fetchFooterData = (data) => {
//     return {
//         type: actionTypes.FETCH_FOOTER,
//         payload: data
//     }
// }
