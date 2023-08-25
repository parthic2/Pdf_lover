import { actionTypes } from "../../Types/actionTypes";

export const getExcelToPDFApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_EXCELToPDF_DATA,
      payload: data.excel_to_pdf,
    });
  };
};