import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
} from "../../constants/reduxActionsNames/product";
import { ReduxAction } from "../redux";

const productReducer = (state: {}, action: ReduxAction) => {
  switch (action.type) {
    case DELETE_PRODUCT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    case DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
