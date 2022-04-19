import React from "react";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import Announcement from "../../components/AWW/Announcement";

const announcement = () => {
  return (
    <div>
      <AppBar />
      <Announcement />
      <Footer />
    </div>
  );
};

export default announcement;
