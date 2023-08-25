import { actionTypes } from "../../Types/actionTypes";

export const getAddWatermarkApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_WATERMARK_DATA,
      payload: data.watermark,
    });
  };
};