import React from "react";
import AppBarMuiForSupervisor from "../../../components/Layout/AppBarMuiForSupervisorInsideAWC";
import Footer from "../../../components/Layout/Footer";
import Attendance from "../../../components/Supervisor/Attendance";

const attendance = () => {
  return (
    <div>
      <AppBarMuiForSupervisor />
      <Attendance />
      <Footer />
    </div>
  );
};

export default attendance;
