import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getMainApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/homepage");
    const data = await response.json();
    // console.log(data.main);

    dispatch({
      type: actionTypes.FETCH_MAIN,
      payload: data.main,
    });
  };
};

// with only redux
// export const fetchMainData = (data) => {
//     return {
//         type: actionTypes.FETCH_MAIN,
//         payload: data
//     }
// }
