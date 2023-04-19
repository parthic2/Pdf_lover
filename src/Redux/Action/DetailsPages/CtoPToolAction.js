import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getCtoPToolApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.CtoP);

        dispatch({
            type: actionTypes.FETCH_CTOP_TOOLS,
            payload: data.tools.CtoP,
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
