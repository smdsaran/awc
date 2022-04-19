import React from "react";
import AppBarMuiForSupervisor from "../../../components/Layout/AppBarMuiForSupervisorInsideAWC";
import Footer from "../../../components/Layout/Footer";
import PLadies from "../../../components/Supervisor/PregnantLadies";

const pregnantladies = () => {
  return (
    <div>
      <AppBarMuiForSupervisor />
      <PLadies />
      <Footer />
    </div>
  );
};

export default pregnantladies;
