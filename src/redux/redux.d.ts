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
export interface PromiseSuccessType {
  success: boolean;
  message: string;
}

interface StateType {
  user: {
    loading: boolean;
    error: string;
    loggedIn: boolean;
    user: User;
  };
  users: {
    loading: boolean;
    users: User[];
    error: error;
  };
  branches: {
    loading: boolean;
    branches: Array<{
      _id: string;
      name: string;
      address: string;
    }>;
  };
  promise: {
    loading: boolean;
    success: boolean;
    message: string | null;
    error: string | null;
  };
}
