import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getRemovePageApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.remove_pages);

    dispatch({
      type: actionTypes.FETCH_REMOVEPAGE_DATA,
      payload: data.remove_pages,
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
