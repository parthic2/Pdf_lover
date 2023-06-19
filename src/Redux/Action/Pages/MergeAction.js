import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getMergeApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch(`${process.env.REACT_APP_JSON_URL}/detailsPages`);
    const data = await response.json();

    dispatch({
      type: actionTypes.FETCH_MERGE_DATA,
      payload: data.merge,
    });
  };
};
