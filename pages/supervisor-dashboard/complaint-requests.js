import React, { useContext } from "react";
import AppBarMuiForSupervisor from "../../components/Layout/AppBarMuiForSupervisor";
import Footer from "../../components/Layout/Footer";
import ComplaintOrRequests from "../../components/Supervisor/ComplaintOrRequests";
import AuthContext from "../../stores/auth-context";

const complaintOrrequest = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <AppBarMuiForSupervisor />}
      {AuthCtx.isLoggedIn && <ComplaintOrRequests />}
      {AuthCtx.isLoggedIn && <Footer />}

      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default complaintOrrequest;
