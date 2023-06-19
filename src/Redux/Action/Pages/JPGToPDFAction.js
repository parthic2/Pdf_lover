import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getJPGtoPDFApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_JPGtoPDF_DATA,
      payload: data.jpg_to_pdf,
    });
  };
};
