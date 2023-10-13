import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import StyleIcon from "@mui/icons-material/Style";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import PeopleIcon from "@mui/icons-material/People";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import CarRentalIcon from "@mui/icons-material/CarRental";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import { Link } from "react-router-dom";

import "./Sidebar.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [submenuStates, setSubmenuStates] = React.useState({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmenuOpen = (submenuKey) => {
    setSubmenuStates({
      ...submenuStates,
      [submenuKey]: !submenuStates[submenuKey],
    });
  };

  const items = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
    {
      text: "Booking History",
      icon: <StyleIcon />,
      isSubmenu: true,
      isOpen: submenuStates["bookingHistory"],
      subItems: [
        { text: "Booking Online", path: "/online-booking",icon:<CardMembershipIcon />},
        { text: "Booking Offline", path: "/offline-booking",icon:<DesktopAccessDisabledIcon/> },
      ],
    },
    { text: "Add Bookings", icon: <CollectionsBookmarkIcon /> },
    { text: "Customer", icon: <PeopleIcon /> },
    { text: "Driver", icon: <DriveEtaIcon /> },
    { text: "Push Notification",path: "/push_notification", icon: <NotificationAddIcon /> },
    {
      text: "Earning",
      icon: <AccountBalanceIcon />,
      isSubmenu: true,
      isOpen: submenuStates["earning"],
      subItems: [
        { text: "Driver Earning", path: "/driver-earning" },
        { text: "Customer Earning", path: "/customer-earning" },
      ],
    },
    { text: "Earning History", icon: <WorkHistoryIcon /> },
    { text: "Truck Type", icon: <LocalShippingIcon /> },
    { text: "Ride Location", icon: <PinDropIcon /> },
    {
      text: "Truck Booking",
      icon: <FireTruckIcon />,
      isSubmenu: true,
      isOpen: submenuStates["truckBooking"],
      subItems: [
        { text: "Booking Online", path: "/booking-online" },
        { text: "Booking Offline", path: "/offline-booking" },
      ],
    },
    {
      text: "Vehicle Rental",
      icon: <CarRentalIcon />,
      isSubmenu: true,
      isOpen: submenuStates["vehicleRental"],
      subItems: [
        { text: "Booking Online", path: "/booking-online" },
        { text: "Booking Offline", path: "/offline-booking" },
      ],
    },
    {
      text: "Administration Tool",
      icon: <AppsSharpIcon />,
      isSubmenu: true,
      isOpen: submenuStates["administrationTool"],
      subItems: [
        { text: "Booking Online", path: "//online-booking" },
        { text: "Booking Offline", path: "/offline-booking" },
      ],
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "orange" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ background: "orange" }}>
          <img className="image" src="./assets/logo.png" alt="logo" />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map((item) => (
            <React.Fragment key={item.text}>
              {item.isSubmenu ? (
                <div>
                  <ListItem
                    onClick={() => handleSubmenuOpen(item.text)}
                    disablePadding
                  >
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "orange",
                          color: "white",
                        },
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                      {submenuStates[item.text] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                  </ListItem>
                  {submenuStates[item.text] && (
                    <Collapse
                      in={submenuStates[item.text]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        
                        {item.subItems.map((subItem) => (
                          <Link to={subItem.path} style={{ textDecoration: "none", color: "inherit" }}>
                          <ListItem
                            key={subItem.text}
                            sx={{
                              "&:hover": {
                                backgroundColor: "orange",
                                color: "white",
                              },
                              paddingLeft: "32px", // Indent submenu items
                            }}
                          >
                            <ListItemIcon>{subItem.icon}</ListItemIcon>
                            <ListItemText primary={subItem.text} />
                          </ListItem>
                          </Link>
                        ))}
                       
                      </List>
                    </Collapse>
                  )}
                </div>
              ) : (
                <ListItem disablePadding>
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItemButton
                      sx={{
                        "&:hover": {
                          backgroundColor: "orange",
                          color: "white",
                          width: "250px",
                        },
                      }}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
