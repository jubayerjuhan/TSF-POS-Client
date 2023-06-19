import client from "../../../client/axiosInstance";
import {
  EXPENSES_ERROR,
  EXPENSES_PENDING,
  EXPENSES_SUCCESS,
} from "../../../constants/reduxActionsNames/expenses";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../redux";
import { ExpensesResponse } from "./types";

export const getExpenses =
  (url: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: EXPENSES_PENDING });
      const { data }: { data: ExpensesResponse } = await client.get(`${url}`);
      if (data.success)
        dispatch({ type: EXPENSES_SUCCESS, payload: data.expenses });
    } catch (error) {
      errorDispatcher(error, EXPENSES_ERROR, dispatch);
    }
  };
