import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getJPGtoPDFApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.jpg_to_pdf);

    dispatch({
      type: actionTypes.FETCH_JPGtoPDF_DATA,
      payload: data.jpg_to_pdf,
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
