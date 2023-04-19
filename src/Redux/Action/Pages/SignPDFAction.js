import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getSignApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.sign);

    dispatch({
      type: actionTypes.FETCH_SIGN_DATA,
      payload: data.sign,
    });
  };
};

// with only redux
// export const fetchMergeData = (data) => {
//     return {
//         type: actionTypes.FETCH_COMPRESS_DATA,
//         payload: data
//     }
// }
