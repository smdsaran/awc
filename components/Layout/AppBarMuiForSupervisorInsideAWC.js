import React, { useState, useContext, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";

import AuthContext from "../../stores/auth-context";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function AppBarMuiForSupervisor() {
  const [toggle, setToggle] = useState(false);
  const AuthCtx = useContext(AuthContext);
  const router = useRouter();

  const [mob, setMob] = useState("");

  let awc = localStorage.getItem("code");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://awc-easy.herokuapp.com/getmobnumber/${awc}`
      );

      console.log(response);

      setMob(response.data.mobile_no);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [awc]);

  const menuIconHandler = () => {
    setToggle(!toggle);
  };

  const logoutBtnHandler = () => {
    AuthCtx.logout();
    localStorage.removeItem("dcode");
    localStorage.removeItem("code");
    router.replace("/");
  };

  const p1ClickHandler = () => {
    router.push("/supervisor-dashboard/awc");
  };

  const p2ClickHandler = () => {
    router.push("/supervisor-dashboard/awc/pregnantladies");
  };

  const p3ClickHandler = () => {
    router.push("/supervisor-dashboard/awc/attendance");
  };

  const p4ClickHandler = () => {
    router.push("/supervisor-dashboard/awc/stock-management");
  };

  const p5ClickHandler = () => {
    router.push("/supervisor-dashboard/awc/studies");
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

          <a
            href={`https://wa.me/91${mob}?text=Hi.%20I%20am%20AWC%20Supervisor.%20Get%20Ready%20for%20Emergency%20Online%20Inspection.`}
            target="_blank"
            className="text-green-600 text-3xl mr-4 bg-white p-4"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

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
            Children Details
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p2ClickHandler}
          >
            Pregnant Ladies
          </p>
          <p
            className="py-2 w-full hover:cursor-pointer"
            onClick={p3ClickHandler}
          >
            Attendance
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
        </div>
      )}
    </div>
  );
}
