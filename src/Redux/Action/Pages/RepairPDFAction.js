import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getRepairApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    dispatch({
      type: actionTypes.FETCH_REPAIR_DATA,
      payload: data.repair,
    });
  };
};
