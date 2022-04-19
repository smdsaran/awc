import React from "react";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import Attendance from "../../components/AWW/Attendance";

const attendance = () => {
  return (
    <div>
      <AppBar />
      <Attendance />
      <Footer />
    </div>
  );
};

export default attendance;
