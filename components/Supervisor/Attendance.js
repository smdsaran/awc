import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DropDownAttendance from "../UI/DropDownAttendance";
import AttendanceContainer from "../UI/AttendanceContainer";

const Attendance = () => {
  const [days, setDays] = useState("today");
  const [attendanceDatas, setAttendanceDatas] = useState([]);

  let awc = localStorage.getItem("code");

  const fetchAttendance = async () => {
    try {
      const response = await axios.get(
        `https://awc-easy.herokuapp.com/view-attendance/${awc}/${days}`
      );

      console.log(response);

      setAttendanceDatas(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [awc, days]);

  const selectedDays = (days) => {
    console.log(days);
    setDays(days);
  };

  const listAttendance = attendanceDatas.map((data) => {
    return (
      <AttendanceContainer
        datas={data.attendance}
        date={data.date}
        key={data._id}
      />
    );
  });

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white mb-8">
        Attendance
      </div>

      <DropDownAttendance selected={selectedDays} />

      {listAttendance}
    </div>
  );
};

// const Pbutton = styled.button`
//   background-color: ${(props) => (props.colour ? "gray" : "green")};
// `;

// const Abutton = styled.button`
//   background-color: ${(props) => (props.colour ? "gray" : "red")};
// `;
export default Attendance;
