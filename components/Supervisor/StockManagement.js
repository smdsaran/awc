import React from "react";

import StockDetailsContainer from "../UI/StockDetailsContainer";

const StockManagement = () => {
  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Stock Management
      </div>

      <StockDetailsContainer key="stocks" />
    </div>
  );
};

export default StockManagement;
