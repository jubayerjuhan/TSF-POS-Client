import {
  ADD_CUSTOM_ORDER_ERROR,
  ADD_CUSTOM_ORDER_PENDING,
  ADD_CUSTOM_ORDER_SUCCESS,
  CUSTOM_ORDER_CLEAR_MESSAGE,
} from "../../constants/reduxActionsNames/customOrder";
import { ReduxAction } from "../redux";

const customOrderReducer = (state = {}, action: ReduxAction) => {
  switch (action.type) {
    case ADD_CUSTOM_ORDER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CUSTOM_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "Order Placed Successfully",
      };
    case ADD_CUSTOM_ORDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CUSTOM_ORDER_CLEAR_MESSAGE:
      return {
        ...state,
        error: null,
        message: null,
      };

    default:
      return state;
  }
};

export default customOrderReducer;
