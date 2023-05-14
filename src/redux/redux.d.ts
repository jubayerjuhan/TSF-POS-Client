import { ThunkDispatch } from "@reduxjs/toolkit";
import { Action, AnyAction } from "redux";
import { RootState } from "./store/configureStore";
import { User } from "../types/User/userTypes";
import { Branch } from "../types/Branch/branchTypes";
import { Product } from "../types/Product/ProductTypes";

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
    message: string | null;
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
  branch: {
    loading: boolean;
    error: string | null;
    branch: Branch;
    message: string | null;
  };
  product: {
    loading: boolean;
    error: string | null;
    message: string | null;
  };
  products: {
    loading: boolean;
    error: string | null;
    message: string | null;
    products: Product[];
  };
  promise: {
    loading: boolean;
    success: boolean;
    message: string | null;
    error: string | null;
  };
}
