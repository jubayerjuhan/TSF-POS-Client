import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupIcon from "@mui/icons-material/Group";
import { SidebarLinkType } from "./types";

const sidebarLinks: SidebarLinkType[] = [
  { name: "Dashboard", icon: DashboardIcon, link: "/" },
  { name: "All Products", icon: DashboardIcon, link: "/products" },
  { name: "Branches", icon: StorefrontIcon, link: "/branches" },
  { name: "Users", icon: GroupIcon, link: "/users" },
];

export default sidebarLinks;
