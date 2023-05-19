import { ADD_TO_CART } from "../../constants/reduxActionsNames/cart";
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

    default:
      return state;
  }
};

export default cartReducer;
