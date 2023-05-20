import client from "../../../client/axiosInstance";
import {
  ADD_SALE_ERROR,
  ADD_SALE_PENDING,
  ADD_SALE_SUCCESS,
} from "../../../constants/reduxActionsNames/sale";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk, SuccessMessageType } from "../../redux";

export const addSale =
  (sale: object): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: ADD_SALE_PENDING });
      const { data }: { data: SuccessMessageType } = await client.post(
        "/sale/add",
        sale
      );
      console.log(data, "data");
      dispatch({ type: ADD_SALE_SUCCESS, payload: data.message });
    } catch (error) {
      errorDispatcher(error, ADD_SALE_ERROR, dispatch);
    }
  };
