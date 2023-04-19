import { actionTypes } from "../../../Types/actionTypes";

// with redux-thunk
export const getPremiumDataApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/pricing");
        const data = await response.json();
        // console.log(data.premium);

        dispatch({
            type: actionTypes.FETCH_PREMIUM,
            payload: data.premium,
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
