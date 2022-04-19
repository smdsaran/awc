import React, { useContext } from "react";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import Childrens from "../../components/AWW/Childrens";
import AuthContext from "../../stores/auth-context";

const AWWDashboard = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <AppBar />}
      {AuthCtx.isLoggedIn && <Childrens />}
      {AuthCtx.isLoggedIn && <Footer />}

      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default AWWDashboard;
