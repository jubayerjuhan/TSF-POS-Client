import client from "../../../client/axiosInstance";
import { ProductFormData } from "../../../components/sections/Product/AddProduct/types";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_PENDING,
  ADD_PRODUCT_SUCCESS,
} from "../../../constants/reduxActionsNames/product";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk, SuccessMessageType } from "../../redux";

export const addProduct =
  (product: FormData): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: ADD_PRODUCT_PENDING });
      const { data }: { data: SuccessMessageType } = await client.post(
        "/product/create",
        product
      );
      if (data.success)
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: data.message });
    } catch (error) {
      errorDispatcher(error, ADD_PRODUCT_ERROR, dispatch);
    }
  };
