import { actionTypes } from "../../../Types/actionTypes";

// with redux-thunk
export const getPricingApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/pricing");
        const data = await response.json();
        // console.log(data.topics);

        dispatch({
            type: actionTypes.FETCH_PRICING,
            payload: data.topics,
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
