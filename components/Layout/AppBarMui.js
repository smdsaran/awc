import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import AuthContext from "../../stores/auth-context";
import { useRouter } from "next/router";

export default function ButtonAppBar() {
  const [toggle, setToggle] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const router = useRouter();

  const menuIconHandler = () => {
    setToggle(!toggle);
  };

  const logoutBtnHandler = () => {
    AuthCtx.logout();
    router.replace("/");
  };

  const p1ClickHandler = () => {
    router.push("/admin-dashboard");
  };

  const p2ClickHandler = () => {
    router.push("/admin-dashboard/add-aww");
  };

  const p3ClickHandler = () => {
    router.push("/admin-dashboard/add-supervisor");
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
            onClick={p1ClickHandler}
          >
            Update AWC
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p2ClickHandler}
          >
            Update AWW
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p3ClickHandler}
          >
            Update Supervisor
          </p>
        </div>
      )}
    </div>
  );
}
