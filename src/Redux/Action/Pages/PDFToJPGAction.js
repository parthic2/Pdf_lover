import { actionTypes } from "../../Types/actionTypes";

export const getPdfToJpgApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_PDFToJPG_DATA,
      payload: data.pdf_to_jpg,
    });
  };
};