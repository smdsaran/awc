import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import classes from "./Login.module.css";
import AuthContext from "../../stores/auth-context";

const AdminLogin = (props) => {
  const AuthCtx = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const [isLogin, setIsLogin] = useState(true);

  const emailOnChangeHandler = (event) => {
    const enteredEmail = event.target.value;

    setEmail(enteredEmail);
  };

  const passwordOnChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const checkBoxHandler = (event) => {
    if (event.target.checked) {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (isLogin) {
      axios
        .post("https://awc-easy.herokuapp.com/admin_login", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            // console.log(response.data.accessToken);

            AuthCtx.login(response.data.accessToken);
            // localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("email", response.data.email);

            router.push("/admin-dashboard");
          } else {
            throw new Error(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
          setError("Login Failed");
        });
    } else {
      axios
        .post("https://awc-easy.herokuapp.com/admin_register", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response) {
            setIsLogin(true);
          } else {
            throw new Error(response.data.message);
          }
        })
        .catch(function (error) {
          console.log(error);
          setError("Login Failed");
        });
    }

    setIsLoading(false);
  };

  let signal;
  if (error) {
    signal = <p>{error}</p>;
  }

  return (
    <main className={classes.main}>
      <form className={classes.auth} onSubmit={formSubmitHandler}>
        <h1>{isLogin ? "Login" : "SignUp"}</h1>

        <div className={classes.control}>
          <label htmlFor="email_input">User ID</label>
          <input
            type="email"
            id="email_input"
            required
            onChange={emailOnChangeHandler}
            value={email}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="password_input">Password</label>
          <input
            type={showPassword}
            id="password_input"
            required
            onChange={passwordOnChangeHandler}
            value={password}
          />
        </div>

        <div className={classes.checkbox_container}>
          <input
            type="checkbox"
            id="showpassword"
            name="showpassword"
            onClick={checkBoxHandler}
            className={classes.checkbox}
          />
          <label htmlFor="showpassword" className={classes.checkbox_label}>
            Show Password
          </label>
        </div>

        <div className={classes.actions}>
          {!isLoading && (
            <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          )}
          {isLoading && <button type="submit">...</button>}
          <button
            type="button"
            onClick={switchAuthHandler}
            className={classes.toggle}
          >
            {isLogin ? "Create New Account" : "Login with Existing Account"}
          </button>
        </div>

        {signal}
      </form>
    </main>
  );
};

export default AdminLogin;
