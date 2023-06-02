import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getSplitApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    // console.log(data.split);

    dispatch({
      type: actionTypes.FETCH_SPLIT_DATA,
      payload: data.split,
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
