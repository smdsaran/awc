import React, { useContext } from "react";
import ADashboard from "../../components/Admin/AdminDashboard";
import AuthContext from "../../stores/auth-context";

const AdminDashboard = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <ADashboard />}
      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
