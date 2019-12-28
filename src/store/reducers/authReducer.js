import { USER } from "../actions/type";

const initialState = {
  user: null
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER: {
      return {
        ...state,
        user: payload
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
};
export default authReducer;
