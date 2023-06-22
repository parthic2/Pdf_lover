import { actionTypes } from "../../Types/actionTypes";

export const getDetailsApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_DETAILS,
      payload: data.details,
    });
  };
};
