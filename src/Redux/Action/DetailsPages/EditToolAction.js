import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getEditToolApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.tools.edit);

        dispatch({
            type: actionTypes.FETCH_EDIT_TOOLS,
            payload: data.tools.edit,
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
