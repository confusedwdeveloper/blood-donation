import { USER } from "./type";

export const storeUser = (user = null) => dispatch => {
  dispatch({
    type: USER,
    payload: user
  });
};
