import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getSecurityToolApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.security);

        dispatch({
            type: actionTypes.FETCH_SECURITY_TOOLS,
            payload: data.tools.security,
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
