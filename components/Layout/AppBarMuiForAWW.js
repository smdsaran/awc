import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AuthContext from "../../stores/auth-context";
import { useRouter } from "next/router";

export default function AppBarMuiForAWW() {
  const [toggle, setToggle] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const router = useRouter();

  const menuIconHandler = () => {
    setToggle(!toggle);
  };

  const logoutBtnHandler = () => {
    AuthCtx.logout();
    localStorage.removeItem("code");
    router.replace("/");
  };

  const p1ClickHandler = () => {
    router.push("/aww-dashboard");
  };

  const p2ClickHandler = () => {
    router.push("/aww-dashboard/add-pregnantlady");
  };

  const p3ClickHandler = () => {
    router.push("/aww-dashboard/attendance");
  };

  const p4ClickHandler = () => {
    router.push("/aww-dashboard/stock-management");
  };

  const p5ClickHandler = () => {
    router.push("/aww-dashboard/studies");
  };

  const p6ClickHandler = () => {
    router.push("/aww-dashboard/leave-request");
  };

  const p7ClickHandler = () => {
    router.push("/aww-dashboard/complaintorrequest");
  };

  const p8ClickHandler = () => {
    router.push("/aww-dashboard/announcement");
  };

  return (
    <div styles={{ margin: 0 }}>
      <AppBar position="sticky" className="sticky top-0">
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
            onClick={p1ClickHandler}
          >
            Update Children Details
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p2ClickHandler}
          >
            Update Pregnant Ladies
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p3ClickHandler}
          >
            AWW Attendance
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p4ClickHandler}
          >
            Stock Management
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p5ClickHandler}
          >
            Studies Collection
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p6ClickHandler}
          >
            Request Leave
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p7ClickHandler}
          >
            Complaint/Request
          </p>

          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p8ClickHandler}
          >
            Announcements
          </p>
        </div>
      )}
    </div>
  );
}
