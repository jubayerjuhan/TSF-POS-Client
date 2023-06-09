import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/sisters_furniture_logo.jpeg";
import sidebarLinks from "../../constants/sidebar/sidebarLinks";
import { useNavigate } from "react-router-dom";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import useAdminPermission from "../../hooks/permission/useAdminPermission";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/redux";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
  children: React.ReactNode;
  title?: string;
  hideBar: boolean;
}

export default function Sidebar(props: Props) {
  const { user } = useSelector((state: StateType) => state.user);
  const isAdmin = useAdminPermission();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkClick = (link: string) => {
    navigate(link);
  };

  const drawer = (
    <div>
      <img src={logo} alt="" style={{ width: "100%", padding: 20 }} />
      <Divider />
      <List>
        {sidebarLinks.map((link, index) => {
          if (link.adminOnlyPermission && !isAdmin) return;
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleLinkClick(link.link)}>
                <ListItemIcon>
                  <link.icon />
                </ListItemIcon>
                <ListItemText
                  primary={link.name}
                  sx={{ fontFamily: "Poppins" }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        {!isAdmin && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate(`/branch/${user.branch}`)}>
              <ListItemIcon>
                <StoreMallDirectoryIcon />
              </ListItemIcon>
              <ListItemText
                primary={"My Branch"}
                sx={{ fontFamily: "Poppins" }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {!props.hideBar && (
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {props.title ? props.title : "The Sisters Furniture"}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          m: props.hideBar ? 0 : 3,
          mt: props.hideBar ? 0 : 10,
          fontSize: 16,
          position: "relative",
          height: "97vh",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}
