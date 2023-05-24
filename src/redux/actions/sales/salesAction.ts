import client from "../../../client/axiosInstance";
import {
  SALES_ERROR,
  SALES_PENDING,
  SALES_SUCCESS,
} from "../../../constants/reduxActionsNames/sales";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../redux";
import { SalesResponse } from "./types";

export const getSales =
  (url: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: SALES_PENDING });
      const { data }: { data: SalesResponse } = await client.get(`${url}`);
      if (data.success)
        dispatch({ type: SALES_SUCCESS, payload: data.saleInfo[0] });
    } catch (error) {
      errorDispatcher(error, SALES_ERROR, dispatch);
    }
  };
