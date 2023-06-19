import {
  CLEAR_EXPENSES_MESSAGES,
  EXPENSES_ERROR,
  EXPENSES_PENDING,
  EXPENSES_SUCCESS,
} from "../../constants/reduxActionsNames/expenses";
import { ReduxAction } from "../redux";

const expensesListReducer = (state = {}, action: ReduxAction) => {
  switch (action.type) {
    case EXPENSES_PENDING:
      return {
        ...state,
        loading: true,
      };
    case EXPENSES_SUCCESS:
      return {
        ...state,
        loading: false,
        branches: action.payload,
        loaded: true,
      };
    case EXPENSES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_EXPENSES_MESSAGES:
      return {
        ...state,
        error: null,
        message: null,
      };

    default:
      return state;
  }
};

export default expensesListReducer;
