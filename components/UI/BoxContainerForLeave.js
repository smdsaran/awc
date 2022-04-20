import React, { useState } from "react";
import axios from "axios";

const BoxContainer = (props) => {
  const acceptClickHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `https://awc-easy.herokuapp.com/delete-leaverequest`,
        {
          data: {
            leaveResponse: "Accept",
            number: props.data.workerNumber,
            id: props.data._id,
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    props.submited();
  };

  const denyClickHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `https://awc-easy.herokuapp.com/delete-leaverequest`,
        {
          data: {
            leaveResponse: "Deny",
            number: props.data.workerNumber,
            id: props.data._id,
          },
        }
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }

    props.submited();
  };

  return (
    <div className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto text-center">
      <p className="p-2 w-full hover:cursor-pointer text-blue-700">
        <strong className="text-indigo-900">Name:</strong>
        {` ${props.data.workerName}`}
      </p>

      <p className="p-2 w-full hover:cursor-pointer">
        <strong>Mobile No:</strong>
        {` ${props.data.workerNumber}`}
      </p>

      <p className="p-2 w-full hover:cursor-pointer">
        <strong>Reason:</strong>
        {` ${props.data.reason}`}
      </p>

      <p className="p-2 w-full hover:cursor-pointer">
        <strong>Center Code:</strong>
        {` ${props.data.centerCode}`}
      </p>

      <div className="flex">
        <button
          className="py-2 mx-10 w-full hover:cursor-pointer text-green-600"
          onClick={acceptClickHandler}
        >
          Accept
        </button>

        <button
          className="py-2 mx-10 w-full hover:cursor-pointer text-red-600"
          onClick={denyClickHandler}
        >
          Deny
        </button>
      </div>
    </div>
  );
};

export default BoxContainer;
