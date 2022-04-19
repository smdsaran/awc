import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let initialToken;
  if (typeof window !== "undefined") {
    initialToken = localStorage.getItem("token");
  }

  const [token, setToken] = useState(initialToken);

  let userloggedIn;
  if (token) {
    userloggedIn = true;
  } else {
    userloggedIn = false;
  }

  const loginHandler = (token) => {
    setToken(token);
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  };

  const contextValue = {
    token: token,
    isLoggedIn: userloggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
