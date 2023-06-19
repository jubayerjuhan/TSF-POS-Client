import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import ChairIcon from "@mui/icons-material/Chair";
import SearchIcon from "@mui/icons-material/Search";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import SellIcon from "@mui/icons-material/Sell";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PaidIcon from "@mui/icons-material/Paid";

import { SidebarLinkType } from "./types";

const sidebarLinks: SidebarLinkType[] = [
  { name: "Dashboard", icon: DashboardIcon, link: "/" },
  { name: "All Products", icon: ChairIcon, link: "/products" },
  { name: "Sale", icon: SellIcon, link: "/sale" },
  { name: "Sale List", icon: FormatListBulletedIcon, link: "/sales" },
  { name: "Expenses", icon: PaidIcon, link: "/expenses" },
  { name: "Search Product", icon: SearchIcon, link: "/search" },
  { name: "Transfer Stock", icon: MoveUpIcon, link: "/transfer-stock" },
  { name: "Branches", icon: StorefrontIcon, link: "/branches" },
  { name: "Users", icon: GroupIcon, link: "/users" },
];

export default sidebarLinks;
