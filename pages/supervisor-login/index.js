import React from "react";
import UserLogin from "../../components/Login/SupervisorLogin";
import Appbar from "../../components/Layout/AppBarForAWW";
import Footer from "../../components/Layout/Footer";

const UserLoginPage = () => {
  return (
    <div>
      <Appbar />
      <UserLogin />
      <Footer />
    </div>
  );
};

export default UserLoginPage;
