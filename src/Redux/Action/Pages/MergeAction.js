import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getMergeApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.merge);

    dispatch({
      type: actionTypes.FETCH_MERGE_DATA,
      payload: data.merge,
    });
  };
};

// with only redux
// export const fetchMergeData = (data) => {
//     return {
//         type: actionTypes.FETCH_MERGE_DATA,
//         payload: data
//     }
// }
