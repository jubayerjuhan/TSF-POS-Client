import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "../reducers/userReducer";
import promiseReducer from "../reducers/promiseReducer";
import usersReducer from "../reducers/usersReducer";
import branchesReducer from "../reducers/branchListReducer";
import branchReducer from "../reducers/branchReducer";
import productReducer from "../reducers/productReducer";
import productsReducer from "../reducers/productsReducer";

//persist config for persistor
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "branches"], // only navigation will be persisted
};

// conbine reducers here
const reducers = combineReducers({
  user: userReducer,
  users: usersReducer,
  branch: branchReducer,
  branches: branchesReducer,
  product: productReducer,
  products: productsReducer,
  promise: promiseReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) => gDM().concat(logger),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export { store, persistor };
