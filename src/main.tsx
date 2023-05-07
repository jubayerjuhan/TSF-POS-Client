import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore.ts";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
