import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getPdfToJpgApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.pdf_to_jpg);

    dispatch({
      type: actionTypes.FETCH_PDFToJPG_DATA,
      payload: data.pdf_to_jpg,
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
