// conponent for routes
import Dashboard from "../pages/Dashboard";
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
];

export default routes;
