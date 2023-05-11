import {
  BRANCH_PENDING,
  BRANCH_SUCCESS,
  BRANCH_ERROR,
} from "./../../constants/reduxActionsNames/branch/index";

import { CLEAR_ERROR } from "../../constants/reduxActionsNames/user";
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
        loading: false,
        branch: action.payload,
      };
    case BRANCH_ERROR:
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

export default branchReducer;
