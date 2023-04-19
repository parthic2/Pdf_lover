import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getOrganizeToolsApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.organize);

        dispatch({
            type: actionTypes.FETCH_TOOLS,
            payload: data.tools.organize,
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
