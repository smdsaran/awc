import React, { useRef, useState } from "react";
import axios from "axios";
import AppBarMui from "../Layout/AppBarMui";

const Supervisor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const nameRef = useRef();
  const useridRef = useRef();
  const mobnumRef = useRef();
  const emailRef = useRef();
  const dcodeRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        "https://awc-easy.herokuapp.com/add-supervisor",
        {
          name: nameRef.current.value,

          user_id: useridRef.current.value,
          mobile_no: mobnumRef.current.value,
          email: emailRef.current.value,
          divisionCode: dcodeRef.current.value,
          password: passwordRef.current.value,
        }
      );

      console.log(response);

      if (response.statusText === "OK") setStatus(response.data);
    } catch (err) {
      console.log(err);
      setStatus("Something Went Wrong, Try Again.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <AppBarMui />
      <div className="w-full h-auto mt-10 flex justify-center items-center content-center">
        <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
          <h1 className="text-center text-blue-800">
            {status ? status : "Add/Edit Supervisor"}
          </h1>
          <input
            type="text"
            placeholder="Supervisor Name"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={nameRef}
          />
          <input
            type="text"
            placeholder="User ID"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={useridRef}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            pattern="[0-9]{10}"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={mobnumRef}
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={emailRef}
          />
          <input
            type="text"
            placeholder="Divison Code"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={dcodeRef}
          />

          <input
            type="text"
            placeholder="New Password"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={passwordRef}
          />

          <button
            type="submit"
            className="w-full h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
          >
            {isLoading ? "..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Supervisor;
