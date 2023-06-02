import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getOcrApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    // console.log(data.ocr);

    dispatch({
      type: actionTypes.FETCH_OCR_DATA,
      payload: data.ocr,
    });
  };
};

// with only redux
// export const fetchMergeData = (data) => {
//     return {
//         type: actionTypes.FETCH_SPLIT_DATA,
//         payload: data
//     }
// }
