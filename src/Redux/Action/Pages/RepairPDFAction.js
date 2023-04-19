import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getRepairApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.repair);

    dispatch({
      type: actionTypes.FETCH_REPAIR_DATA,
      payload: data.repair,
    });
  };
};

// with only redux
// export const fetchMergeData = (data) => {
//     return {
//         type: actionTypes.FETCH_SPLIT_DATA,
//         payload: data
//     }
// }
