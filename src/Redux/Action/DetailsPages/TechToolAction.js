import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getTechToolApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.tech);

        dispatch({
            type: actionTypes.FETCH_TECH_TOOLS,
            payload: data.tools.tech,
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
