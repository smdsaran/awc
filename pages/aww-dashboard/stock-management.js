import React from "react";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import StockManagement from "../../components/AWW/StockManagement";

const stockmanagement = () => {
  return (
    <div>
      <AppBar />
      <StockManagement />
      <Footer />
    </div>
  );
};

export default stockmanagement;
