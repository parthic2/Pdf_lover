import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getPdfToJpgApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_PDFToJPG_DATA,
      payload: data.pdf_to_jpg,
    });
  };
};