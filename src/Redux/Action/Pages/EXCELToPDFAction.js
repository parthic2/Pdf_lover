import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getExcelToPDFApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.excel_to_pdf);

    dispatch({
      type: actionTypes.FETCH_EXCELToPDF_DATA,
      payload: data.excel_to_pdf,
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
