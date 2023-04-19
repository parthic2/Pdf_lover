import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getTrustedApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/homepage");
    const data = await response.json();
    // console.log(data.trusted);

    dispatch({
      type: actionTypes.FETCH_TRUSTED_DATA,
      payload: data.trusted,
    });
  };
};

// with only redux
// export const fetchTrustedData = (data) => {
//     return {
//         type: actionTypes.FETCH_TRUSTED_DATA,
//         payload: data
//     }
// }
