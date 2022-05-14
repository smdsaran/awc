import React from "react";
import UserLogin from "../components/Login/Login";
import Appbar from "../components/Layout/AppBar";
import Footer from "../components/Layout/Footer";

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
