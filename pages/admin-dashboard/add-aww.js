import React, { useContext } from "react";
import AWW from "../../components/Admin/AWW";
import AuthContext from "../../stores/auth-context";

const addaww = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <div>
      {AuthCtx.isLoggedIn && <AWW />}
      {!AuthCtx.isLoggedIn && (
        <p>Authenticated user only allowed. Login and Come Again.</p>
      )}
    </div>
  );
};

export default addaww;
