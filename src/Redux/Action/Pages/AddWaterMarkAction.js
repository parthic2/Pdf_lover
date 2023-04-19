import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getAddWatermarkApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.watermark);

    dispatch({
      type: actionTypes.FETCH_WATERMARK_DATA,
      payload: data.watermark,
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
