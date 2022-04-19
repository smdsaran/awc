import React, { useContext } from "react";
import AppBarMuiForSupervisor from "../../components/Layout/AppBarMuiForSupervisor";
import Footer from "../../components/Layout/Footer";
import LeaveRequests from "../../components/Supervisor/LeaveRequests";
import AuthContext from "../../stores/auth-context";

const leaverequest = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <AppBarMuiForSupervisor />}
      {AuthCtx.isLoggedIn && <LeaveRequests />}
      {AuthCtx.isLoggedIn && <Footer />}

      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default leaverequest;
