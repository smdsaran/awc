import React from "react";
import AppBarMuiForSupervisor from "../../../components/Layout/AppBarMuiForSupervisorInsideAWC";
import StockManagement from "../../../components/Supervisor/StockManagement";
import Footer from "../../../components/Layout/Footer";

const stock = () => {
  return (
    <div>
      <AppBarMuiForSupervisor />
      <StockManagement />
      <Footer />
    </div>
  );
};

export default stock;
