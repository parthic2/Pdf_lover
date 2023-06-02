import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getCompressApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    // console.log(data.compress);

    dispatch({
      type: actionTypes.FETCH_COMPRESS_DATA,
      payload: data.compress,
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
