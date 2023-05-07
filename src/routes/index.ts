// conponent for routes
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";

// types of route object
import { Route } from "./types";

const routes: Route[] = [
  {
    path: "/",
    component: Dashboard,
    secured: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
];

export default routes;
