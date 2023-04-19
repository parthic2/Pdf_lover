import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getOrganizeApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPage");
    const data = await response.json();
    // console.log(data.organize);

    dispatch({
      type: actionTypes.FETCH_ORGANIZE_DATA,
      payload: data.organize,
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
