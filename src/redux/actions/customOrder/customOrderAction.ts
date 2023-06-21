import { FETCH_CUSTOM_ORDERS_ERROR } from "./../../../constants/reduxActionsNames/customOrder/index";
import client from "../../../client/axiosInstance";
import {
  ADD_CUSTOM_ORDER_ERROR,
  ADD_CUSTOM_ORDER_PENDING,
  ADD_CUSTOM_ORDER_SUCCESS,
  FETCH_CUSTOM_ORDERS_PENDING,
  FETCH_CUSTOM_ORDERS_SUCCESS,
} from "../../../constants/reduxActionsNames/customOrder";
import { CustomOrderType } from "../../../types/CustomOrder/CustomOrderTypes";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../redux";
import { FetchCustomOrdersSuccess } from "./types";

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

/**
 * with this function we will get all of the custom orders
 * if the user is admin then if he do not choose the branch
 * then he will look at all of the branches
 * Mods- if mods request with this function they will pass
 * a `branchId` by default and they will recieve custom orders
 * for the branchId of they are currrently working
 */

export const fetchCustomOrders: RootThunk =
  (branchId?: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: FETCH_CUSTOM_ORDERS_PENDING });

      const { data }: { data: FetchCustomOrdersSuccess } = await client.get(
        `custom-order/list?branchId=${branchId ? branchId : ""}`
      );

      dispatch({ type: FETCH_CUSTOM_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
      errorDispatcher(error, FETCH_CUSTOM_ORDERS_ERROR, dispatch);
    }
  };
