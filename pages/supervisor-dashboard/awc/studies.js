import React from "react";
import AppBarMuiForSupervisor from "../../../components/Layout/AppBarMuiForSupervisorInsideAWC";
import Footer from "../../../components/Layout/Footer";
import Studies from "../../../components/Supervisor/Studies";

const studies = () => {
  return (
    <div>
      <AppBarMuiForSupervisor />
      <Studies />
      <Footer />
    </div>
  );
};

export default studies;
