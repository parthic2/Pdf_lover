import { actionTypes } from "../../Types/actionTypes";

// with redux-thunk
export const getSolutionApi = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://pdf-lover-data.onrender.com/homepage");
    const data = await response.json();
    // console.log(data.slider);

    dispatch({
      type: actionTypes.FETCH_SOLUTION_DATA,
      payload: data.slider,
    });
  };
};

// WITH REDUX
// export const fetchPremiumData = (data) => {
//     return {
//         type: actionTypes.FETCH_PREMIUM_DATA,
//         payload: data
//     }
// }
