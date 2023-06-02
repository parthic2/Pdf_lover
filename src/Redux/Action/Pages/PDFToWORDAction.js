import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getPDFtoWORDApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    // console.log(data.pdf_to_word);

    dispatch({
      type: actionTypes.FETCH_PDFToWORD_DATA,
      payload: data.pdf_to_word,
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
