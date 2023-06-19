import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getFooterApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_FOOTER,
      payload: data.footer,
    });
  };
};


