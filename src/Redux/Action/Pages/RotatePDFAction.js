import { actionTypes } from "../../Types/actionTypes";

export const getRotateApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_ROTATE_DATA,
      payload: data.rotate,
    });
  };
};