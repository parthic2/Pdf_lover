import { actionTypes } from "../../Types/actionTypes";

export const getMainApi = () => {
  return async (dispatch) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_MAIN,
      payload: data.main,
    });
  };
};