import { ThunkDispatch } from "@reduxjs/toolkit";
import { Action, AnyAction } from "redux";
import { RootState } from "./store/configureStore";
import { User } from "../types/userTypes";

export interface ReduxAction extends Action {
  payload: object | string | Array;
}

export type RootThunk = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

interface StateType {
  user: {
    loading: boolean;
    error: string;
    loggedIn: boolean;
    user: User;
  };
  promise: {
    loading: boolean;
    success: boolean;
    message: string | null;
    error: string | null;
  };
}
