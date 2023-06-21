import client from "../../../client/axiosInstance";
import {
  ADD_CUSTOM_ORDER_ERROR,
  ADD_CUSTOM_ORDER_PENDING,
  ADD_CUSTOM_ORDER_SUCCESS,
} from "../../../constants/reduxActionsNames/customOrder";
import { CustomOrderType } from "../../../types/CustomOrder/CustomOrderTypes";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../redux";

export const addCustomOrder: RootThunk =
  (customOrderData: CustomOrderType) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: ADD_CUSTOM_ORDER_PENDING });

      await client.post("custom-order/create", customOrderData);

      dispatch({ type: ADD_CUSTOM_ORDER_SUCCESS });
    } catch (error) {
      errorDispatcher(error, ADD_CUSTOM_ORDER_ERROR, dispatch);
    }
  };
