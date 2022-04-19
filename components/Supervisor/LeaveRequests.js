import React, { useState, useEffect } from "react";
import BoxContainerForLeave from "../UI/BoxContainerForLeave";
import axios from "axios";

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  let dcode = localStorage.getItem("dcode");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/view-leaverequest/${dcode}`
      );

      console.log(response);

      setLeaveRequests(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dcode]);

  const acceptedOrDenied = () => {
    fetchData();
  };

  let listing;

  if (leaveRequests !== undefined) {
    listing = leaveRequests.map((data) => {
      return (
        <BoxContainerForLeave
          data={data}
          key={data._id}
          submited={acceptedOrDenied}
        />
      );
    });
  }

  if (leaveRequests.length === 0) {
    listing = (
      <p className="text-center text-red-600 m-4">
        No Leave Requests Available.
      </p>
    );
  }

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Leave Requests
      </div>

      {listing}
    </div>
  );
};

export default LeaveRequests;
