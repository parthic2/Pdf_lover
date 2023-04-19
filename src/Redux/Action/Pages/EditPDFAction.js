import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getEditApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.edit);

    dispatch({
      type: actionTypes.FETCH_EDIT_DATA,
      payload: data.edit,
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
