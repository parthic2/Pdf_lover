import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getDetailsApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/homepage");
    const data = await response.json();
    // console.log(data.details);

    dispatch({
      type: actionTypes.FETCH_DETAILS,
      payload: data.details,
    });
  };
};

// with redux
// export const fetchDetailsData = (data) => {
//     return {
//         type: actionTypes.FETCH_DETAILS,
//         payload: data
//     }
// }
