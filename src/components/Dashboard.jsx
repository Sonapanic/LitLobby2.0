import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import BookCards from "./BookCards";
import DataContext from "../context/DataContext";
import { Link } from "react-router-dom";
import { Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: 240,
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

const Dashboard = () => {
  return (
    <div className="w-full bg-gray-300 text-center flex flex-col p-5 justify-around text-lg shadow-lg rounded-sm">
      <Link to={"lobby"} className="underline text-testShadow">
        Your Lobby
      </Link>
      <span>Friends *coming soon* </span>
      <span>Book Club *coming soon*</span>
      <span>Libraries *coming soon*</span>
    </div>
  );
};

export default Dashboard;

// className="w-full bg-gray-300 text-center flex flex-col text-lg justify-between p-5 shadow-lg rounded-sm"
