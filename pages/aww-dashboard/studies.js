import React from "react";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import Study from "../../components/AWW/Studies";

const studies = () => {
  return (
    <div>
      <AppBar />
      <Study />
      <Footer />
    </div>
  );
};

export default studies;
