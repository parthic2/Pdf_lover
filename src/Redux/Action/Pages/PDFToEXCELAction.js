import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getPDFtoEXCELApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    // console.log(data.pdf_to_excel);

    dispatch({
      type: actionTypes.FETCH_PDFToEXCEL_DATA,
      payload: data.pdf_to_excel,
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
