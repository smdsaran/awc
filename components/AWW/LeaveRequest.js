import React, { useRef, useState } from "react";
import axios from "axios";

const LeaveRequest = (props) => {
  const divisionCode = useRef();
  const workerName = useRef();
  const workerNumber = useRef();
  const workerEmail = useRef();
  const reason = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://awc-easy.herokuapp.com/request-leave`,
        {
          centerCode: localStorage.getItem("code"),
          divisionCode: divisionCode.current.value,
          workerName: workerName.current.value,
          workerNumber: workerNumber.current.value,
          workerEmail: workerEmail.current.value,
          reason: reason.current.value,
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
        Leave Requests
      </div>

      <div className="w-full h-auto mb-96 mt-10 flex justify-center items-center content-center my-4">
        <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
          <h1 className="text-center text-blue-800">
            {status ? status : "Leave Request"}
          </h1>
          <input
            type="text"
            placeholder="Division Code"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={divisionCode}
          />

          <input
            type="text"
            placeholder="Worker Name"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={workerName}
          />

          <input
            type="tel"
            placeholder="Worker Mobile No"
            pattern="[0-9]{10}"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={workerNumber}
          />

          <input
            type="email"
            placeholder="Worker Email"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={workerEmail}
          />

          <textarea
            type="text"
            placeholder="Reason for Leave"
            className="w-full border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={reason}
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

export default LeaveRequest;
