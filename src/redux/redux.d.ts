import { ThunkDispatch } from "@reduxjs/toolkit";
import { Action, AnyAction } from "redux";
import { RootState } from "./store/configureStore";

export interface ReduxAction extends Action {
  payload: any;
}

export type RootThunk = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  AnyAction
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
