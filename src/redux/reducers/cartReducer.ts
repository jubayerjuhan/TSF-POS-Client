import { BranchProduct } from "../../components/sections/Branch/BranchProducts/BranchProducts";
import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
} from "../../constants/reduxActionsNames/cart";
import { ReduxAction } from "../redux";

const cartReducer = (
  state = {
    cart: [],
  },
  action: ReduxAction
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case CHANGE_QUANTITY: {
      return {
        ...state,
        cart: state.cart.map((pd: BranchProduct) =>
          pd._id === action.payload._id ? action.payload : pd
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
