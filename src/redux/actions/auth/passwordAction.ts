import { ForgotPasswordSuccess } from "./types/password.d";
import client from "../../../client/axiosInstance";
import { AppDispatch, RootThunk } from "../../redux";
import {
  PROMISE_DESTROY,
  PROMISE_ERROR,
  PROMISE_PENDING,
  PROMISE_SUCCESS,
} from "../../../constants/reduxActionsNames/promise";

export const forgotPassword =
  (email: string): RootThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: PROMISE_PENDING });
      const { data }: { data: ForgotPasswordSuccess } = await client.post(
        `/auth/forgot-password/${email}`
      );
      dispatch({ type: PROMISE_SUCCESS, payload: data.message });
    } catch (error: any) {
      if (error.response) {
        return dispatch({
          type: PROMISE_ERROR,
          payload: error.response.data.message,
        });
      }
    } finally {
      setTimeout(() => {
        dispatch({ type: PROMISE_DESTROY });
      }, 100);
    }
  };
