import { actionTypes } from "../../../Types/actionTypes";

// with redux-thunk
export const getFreeDataApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/pricing");
        const data = await response.json();
        // console.log(data.free);

        dispatch({
            type: actionTypes.FETCH_FREE_DATA,
            payload: data.free,
        });
    };
};

// with only redux
// export const fetchMainData = (data) => {
//     return {
//         type: actionTypes.FETCH_MAIN,
//         payload: data
//     }
// }
