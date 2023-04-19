import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getLegalApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.legal);

        dispatch({
            type: actionTypes.FETCH_LEGAL,
            payload: data.legal,
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
