import { user, loggedIn } from "../actions/type";

const initialState = {
  user: null,
  loggedIn: false
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case user: {
      return {
        ...state,
        user: payload
      };
    }
    case loggedIn: {
      return {
        ...state,
        loggedIn: payload
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
