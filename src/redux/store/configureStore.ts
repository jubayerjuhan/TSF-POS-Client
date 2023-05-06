import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";
import logger from "redux-logger";

// conbine reducers here
const reducers = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (gDM) => gDM().concat(logger),
});

export default store;
