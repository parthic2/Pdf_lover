import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getCFromPToolApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.CFromP);

        dispatch({
            type: actionTypes.FETCH_CFROMP_TOOLS,
            payload: data.tools.CFromP,
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
