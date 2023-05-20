import {
  ADD_SALE_ERROR,
  ADD_SALE_PENDING,
  ADD_SALE_SUCCESS,
  CLEAR_SALE_MESSAGE,
} from "../../constants/reduxActionsNames/sale";
import { ReduxAction } from "../redux";

const saleReducer = (state = {}, action: ReduxAction) => {
  switch (action.type) {
    case ADD_SALE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_SALE_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case ADD_SALE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_SALE_MESSAGE:
      return {
        ...state,
        error: null,
        message: null,
      };

    default:
      return state;
  }
};

export default saleReducer;
