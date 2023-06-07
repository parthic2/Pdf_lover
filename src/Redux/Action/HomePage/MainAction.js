import { actionTypes } from "../../Types/actionTypes";

export const getMainApi = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_MAIN_START });

    try {
      const response = await fetch("https://pdf-lover-data.onrender.com/homepage");
      const data = await response.json();

      dispatch({
        type: actionTypes.FETCH_MAIN,
        payload: data.main,
      });
    } catch (error) {
      // Handle error if needed
    }
  };
};


// with only redux
// export const fetchMainData = (data) => {
//     return {
//         type: actionTypes.FETCH_MAIN,
//         payload: data
//     }
// }
