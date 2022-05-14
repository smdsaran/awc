import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import classes from "./Login.module.css";
import AuthContext from "../../stores/auth-context";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState("password");

  const AuthCtx = useContext(AuthContext);

  const router = useRouter();

  const emailOnChangeHandler = (event) => {
    const enteredEmail = event.target.value;

    setEmail(enteredEmail);
  };

  const passwordOnChangeHandler = (event) => {
    const enteredPassword = event.target.value;
    setPassword(enteredPassword);
  };

  const checkBoxHandler = (event) => {
    if (event.target.checked) {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        // https://awc-easy.herokuapp.com

        "http://localhost:3001/login-aww",
        {
          user_id: email,
          password: password,
        }
      );

      console.log(response);
      if (response) {
        // console.log(response.data.accessToken);

        AuthCtx.login(response.data.accessToken);
        // localStorage.setItem("token", response.data.accessToken);
        localStorage.setItem("code", response.data.code);

        router.push("/aww-dashboard");
      }
    } catch (error) {
      console.log(error);

      if (error.message === "Request failed with status code 401")
        setError("Unauthorized Credentials");
      if (error.message === "Request failed with status code 429")
        setError("Too Many Requests. Try Again Tomorrow");
    }

    setIsLoading(false);
  };

  let signal;
  if (error) {
    signal = <p className="mt-4 text-center text-red-600">{error}</p>;
  }

  return (
    <main className={classes.main}>
      <form className={classes.auth} onSubmit={formSubmitHandler}>
        <h1>AWW Login</h1>

        <div className={classes.control}>
          <label htmlFor="email_input">User ID</label>
          <input
            type="text"
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
          <button type="submit">{isLoading ? "..." : "Login"}</button>
        </div>
        {signal}
      </form>
    </main>
  );
};

export default Login;
