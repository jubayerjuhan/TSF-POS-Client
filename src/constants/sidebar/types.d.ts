import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type SidebarLinkType = {
  name: string;
  link: string;
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
};
