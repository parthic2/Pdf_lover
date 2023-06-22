import { actionTypes } from "../../Types/actionTypes";

export const getUnlockApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_UNLOCK_DATA,
      payload: data.unlock,
    });
  };
};