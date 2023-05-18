// conponent for routes
import Branch from "../pages/Branch";
import Branches from "../pages/Branches/Branches";
import Dashboard from "../pages/Dashboard";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Products from "../pages/Products";
import ResetPassword from "../pages/ResetPassword";
import Sale from "../pages/Sale";
import SearchProduct from "../pages/SearchProduct";
import TransferStock from "../pages/TransferStock";
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
  {
    path: "/branch/:id",
    component: Branch,
    secured: true,
  },
  {
    path: "/products",
    component: Products,
    secured: true,
  },
  {
    path: "/product/:id",
    component: Product,
    secured: true,
  },
  {
    path: "/search",
    component: SearchProduct,
    secured: true,
  },
  {
    path: "/transfer-stock",
    component: TransferStock,
    secured: true,
  },
  {
    path: "/sale",
    component: Sale,
    secured: true,
  },
];

export default routes;
