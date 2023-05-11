import client from "../../../client/axiosInstance";
import {
  BRANCH_ERROR,
  BRANCH_PENDING,
  BRANCH_SUCCESS,
} from "../../../constants/reduxActionsNames/branch";
import {
  PROMISE_DESTROY,
  PROMISE_ERROR,
  PROMISE_PENDING,
  PROMISE_SUCCESS,
} from "../../../constants/reduxActionsNames/promise";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../redux";
import { BranchEditResponse, BranchResponse } from "./types";

export const getBranch =
  (branchId: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: BRANCH_PENDING });
      const { data }: { data: BranchResponse } = await client.get(
        `/branch/action/${branchId}`
      );
      if (data.success)
        dispatch({ type: BRANCH_SUCCESS, payload: data.branch });
    } catch (error: any) {
      errorDispatcher(error, BRANCH_ERROR, dispatch);
    }
  };

// edit branch
export const editBranch =
  (branchData: BranchEditData, branchId: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: PROMISE_PENDING });
      const { data }: { data: BranchEditResponse } = await client.put(
        `/branch/action/${branchId}`,
        branchData
      );

      if (data.success)
        dispatch({ type: PROMISE_SUCCESS, payload: data.message });
    } catch (error: any) {
      errorDispatcher(error, PROMISE_ERROR, dispatch);
    } finally {
      setTimeout(() => {
        dispatch({ type: PROMISE_DESTROY });
      }, 300);
    }
  };
