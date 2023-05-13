import {
  BRANCH_PENDING,
  BRANCH_SUCCESS,
  BRANCH_ERROR,
  BRANCH_ADD_PENDING,
  BRANCH_ADD_SUCCESS,
  BRANCH_ADD_ERROR,
} from "./../../constants/reduxActionsNames/branch/index";

import {
  CLEAR_ERROR,
  CLEAR_SUCCESS,
} from "../../constants/reduxActionsNames/user";
import { ReduxAction } from "../redux";

const branchReducer = (state = {}, action: ReduxAction) => {
  switch (action.type) {
    case BRANCH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case BRANCH_SUCCESS:
      return {
        ...state,
        branch: action.payload,
        loading: false,
      };
    case BRANCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // branch add case
    case BRANCH_ADD_PENDING:
      return {
        ...state,
        loading: true,
      };
    case BRANCH_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case BRANCH_ADD_ERROR:
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
    case "CLEAR_BRANCH":
      return {};
    case CLEAR_SUCCESS:
      return {
        ...state,
        message: null,
      };

    default:
      return state;
  }
};

export default branchReducer;
