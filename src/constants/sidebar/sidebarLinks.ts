import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import { SidebarLinkType } from "./types";

const sidebarLinks: SidebarLinkType[] = [
  { name: "Dashboard", icon: DashboardIcon, link: "/" },
  { name: "Users", icon: GroupIcon, link: "/users" },
];

export default sidebarLinks;
