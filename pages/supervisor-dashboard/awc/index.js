import React from "react";
import AppBarMuiForSupervisor from "../../../components/Layout/AppBarMuiForSupervisorInsideAWC";
import Footer from "../../../components/Layout/Footer";
import Children from "../../../components/Supervisor/Children";

const index = () => {
  return (
    <div>
      <AppBarMuiForSupervisor />
      <Children />
      <Footer />
    </div>
  );
};

export default index;
