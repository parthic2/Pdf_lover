import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getOptimizeToolApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.optimize);

        dispatch({
            type: actionTypes.FETCH_OPTIMIZE_TOOLS,
            payload: data.tools.optimize,
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
