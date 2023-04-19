import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getFAQApi = () => {
    return async (dispatch, getState) => {
        const response = await fetch("https://pdf-lover-data.onrender.com/informationData");
        const data = await response.json();
        // console.log(data.faq);

        dispatch({
            type: actionTypes.FETCH_FAQ,
            payload: data.faq,
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
