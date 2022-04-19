import React, { useContext } from "react";
import PregnantLadies from "../../components/AWW/PregnantLadies";
import AppBar from "../../components/Layout/AppBarMuiForAWW";
import Footer from "../../components/Layout/Footer";
import AuthContext from "../../stores/auth-context";

const addpregnantlady = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <AppBar />}
      {AuthCtx.isLoggedIn && <PregnantLadies />}
      {AuthCtx.isLoggedIn && <Footer />}

      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default addpregnantlady;
