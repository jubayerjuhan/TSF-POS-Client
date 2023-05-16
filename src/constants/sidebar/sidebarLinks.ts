import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import ChairIcon from "@mui/icons-material/Chair";
import SearchIcon from "@mui/icons-material/Search";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import { SidebarLinkType } from "./types";

const sidebarLinks: SidebarLinkType[] = [
  { name: "Dashboard", icon: DashboardIcon, link: "/" },
  { name: "All Products", icon: ChairIcon, link: "/products" },
  { name: "Seacrch Product", icon: SearchIcon, link: "/search" },
  { name: "Transfer Stock", icon: MoveUpIcon, link: "/transfer-stock" },
  { name: "Branches", icon: StorefrontIcon, link: "/branches" },
  { name: "Users", icon: GroupIcon, link: "/users" },
];

export default sidebarLinks;
