import React, { useContext } from "react";
import Supervisor from "../../components/Admin/Supervisor";
import AuthContext from "../../stores/auth-context";

const addsupervisor = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <Supervisor />}
      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default addsupervisor;
