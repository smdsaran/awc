import React from "react";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import LeaveRequest from "../../components/AWW/LeaveRequest";

const leaverequest = () => {
  return (
    <div>
      <AppBar />
      <LeaveRequest />
      <Footer />
    </div>
  );
};

export default leaverequest;
