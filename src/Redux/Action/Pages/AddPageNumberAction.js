import { actionTypes } from "../../Types/actionTypes";

// With redux-thunk
export const getAddPgNumApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/detailsPages");
    const data = await response.json();
    // console.log(data.add_page_numbers);

    dispatch({
      type: actionTypes.FETCH_ADDPGNUM_DATA,
      payload: data.add_page_numbers,
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
