import {
  CLEAR_ERROR,
  LOGIN_ERROR,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
} from "../../constants/reduxActionsNames/user";
import { ReduxAction } from "../redux";

const userReducer = (state = {}, action: ReduxAction) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducer;
