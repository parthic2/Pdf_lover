import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getUnlockApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.unlock);

    dispatch({
      type: actionTypes.FETCH_UNLOCK_DATA,
      payload: data.unlock,
    });
  };
};

// with only redux
// export const fetchMergeData = (data) => {
//     return {
//         type: actionTypes.FETCH_COMPRESS_DATA,
//         payload: data
//     }
// }
