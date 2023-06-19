import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getPremiumApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_PREMIUM_DATA,
      payload: data.premium,
    });
  };
};
