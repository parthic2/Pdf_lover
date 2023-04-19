import { actionTypes } from "../../../Types/actionTypes";

// with redux-thunk
export const getBusinessDataApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/pricing");
        const data = await response.json();
        // console.log(data.business);

        dispatch({
            type: actionTypes.FETCH_BUSINESS_DATA,
            payload: data.business,
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
