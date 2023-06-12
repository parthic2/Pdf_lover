import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getPremiumApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/homepage");
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_PREMIUM_DATA,
      payload: data.premium,
    });
  };
};
