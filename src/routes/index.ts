// conponent for routes
import Branches from "../pages/Branches/Branches";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Users from "../pages/Users";

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
  {
    path: "/reset-password/:token",
    component: ResetPassword,
  },
  {
    path: "/users",
    component: Users,
    secured: true,
  },
  {
    path: "/branches",
    component: Branches,
    secured: true,
  },
];

export default routes;
