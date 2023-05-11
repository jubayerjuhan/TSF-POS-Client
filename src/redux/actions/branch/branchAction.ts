import client from "../../../client/axiosInstance";
import {
  BRANCH_ERROR,
  BRANCH_PENDING,
  BRANCH_SUCCESS,
} from "../../../constants/reduxActionsNames/branch";
import errorDispatcher from "../../dispatcher/errorDispatcher";
import { AppDispatch, RootThunk } from "../../redux";
import { BranchResponse } from "./types";

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
