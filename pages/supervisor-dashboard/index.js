import React, { useContext } from "react";
import AppBarMuiForSupervisor from "../../components/Layout/AppBarMuiForSupervisor";
import Footer from "../../components/Layout/Footer";
import AWCLists from "../../components/Supervisor/AWCLists";
import AuthContext from "../../stores/auth-context";

const index = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <AppBarMuiForSupervisor />}
      {AuthCtx.isLoggedIn && <AWCLists />}
      {AuthCtx.isLoggedIn && <Footer />}

      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default index;
