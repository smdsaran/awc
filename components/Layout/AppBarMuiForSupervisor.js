import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AuthContext from "../../stores/auth-context";
import { useRouter } from "next/router";

export default function AppBarMuiForSupervisor() {
  const [toggle, setToggle] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const router = useRouter();

  const menuIconHandler = () => {
    setToggle(!toggle);
  };

  const logoutBtnHandler = () => {
    AuthCtx.logout();
    localStorage.removeItem("dcode");
    localStorage.removeItem("code");
    router.replace("/");
  };

  const pClickHandler = () => {
    router.push("/supervisor-dashboard");
  };

  const p1ClickHandler = () => {
    router.push("/supervisor-dashboard/leave-requests");
  };

  const p2ClickHandler = () => {
    router.push("/supervisor-dashboard/complaint-requests");
  };

  const p3ClickHandler = () => {
    router.push("/supervisor-dashboard/announcements-to-awws");
  };

  return (
    <div styles={{ margin: 0 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={menuIconHandler}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            AWC
          </Typography>
          <Button color="inherit" onClick={logoutBtnHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {toggle && (
        <div className="w-full bg-cyan-500 text-white p-5">
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={pClickHandler}
          >
            Home
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p1ClickHandler}
          >
            Leave Requests
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p2ClickHandler}
          >
            Complaint/Requests
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p3ClickHandler}
          >
            Announcements to AWWs
          </p>
        </div>
      )}
    </div>
  );
}
