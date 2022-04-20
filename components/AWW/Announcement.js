import React, { useRef, useState } from "react";
import axios from "axios";

const Announcement = (props) => {
  const body = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://awc-easy.herokuapp.com/announcement`,
        {
          centerCode: localStorage.getItem("code"),
          body: body.current.value,
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
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Announcements
      </div>

      <div className="w-full h-auto mt-10 flex justify-center items-center content-center my-4">
        <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
          <h1 className="text-center text-blue-800">
            {status ? status : "Add"}
          </h1>

          <textarea
            type="text"
            placeholder="Body"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={body}
          />

          <button
            type="submit"
            className="w-10/12 h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
          >
            {isLoading ? "..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Announcement;
