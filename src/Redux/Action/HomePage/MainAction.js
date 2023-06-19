import { actionTypes } from "../../Types/actionTypes";

export const getMainApi = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_MAIN_START });

    try {
      const response = await fetch(`${process.env.REACT_APP_JSON_URL}/homepage`);
      const data = await response.json();

      dispatch({
        type: actionTypes.FETCH_MAIN,
        payload: data.main,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
