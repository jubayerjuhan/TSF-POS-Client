import client from "../../../../client/axiosInstance";
import {
  DELETE_MODERATOR_PENDING,
  DELETE_MODERATOR_SUCCESS,
} from "../../../../constants/reduxActionsNames/moderator";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_PENDING,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
  EDIT_PRODUCT_PENDING,
  EDIT_PRODUCT_SUCCESS,
} from "../../../../constants/reduxActionsNames/product";
import errorDispatcher from "../../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../../redux";
import { DeleteProductFromBranchResponse } from "./types";

export const deleteProductFromBranch =
  (branchId: string, productId: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: DELETE_PRODUCT_PENDING });
      const { data }: { data: DeleteProductFromBranchResponse } =
        await client.delete(`/branch/product/${branchId}?product=${productId}`);
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.message });
    } catch (error: any) {
      errorDispatcher(error, DELETE_PRODUCT_ERROR, dispatch);
    }
  };

export const changeBranchProductQuantity =
  (branchId: string, productId: string, quantity: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: EDIT_PRODUCT_PENDING });
      const { data }: { data: DeleteProductFromBranchResponse } =
        await client.put(`/branch/product/${branchId}`, {
          product: productId,
          quantity,
        });
      dispatch({ type: EDIT_PRODUCT_SUCCESS, payload: data.message });
    } catch (error: any) {
      errorDispatcher(error, EDIT_PRODUCT_ERROR, dispatch);
    }
  };
