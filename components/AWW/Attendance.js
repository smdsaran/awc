import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import DropDownAttendance from "../UI/DropDownAttendance";
import AttendanceContainer from "../UI/AttendanceContainer";

const Attendance = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [sentData, setSentData] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const [place, setPlace] = useState("");
  // const [awcData, setAwcData] = useState({});
  const [samePlace, setSamePlace] = useState("Loading");

  const [days, setDays] = useState("today");
  const [attendanceDatas, setAttendanceDatas] = useState({});

  let awc = localStorage.getItem("code");

  // const successfulLookup = async () => {
  //   let latitude = coords?.latitude;
  //   let longitude = coords?.longitude;

  //   console.log(latitude, longitude);

  //   const res = await axios.get(
  //     `https://api.opencagedata.com/geocode/v1/json?key=8e0dfdbc7d6341afbbff9e84bc1b39a6&q=${latitude}+${longitude}`
  //   );

  //   console.log(res.data);

  //   setPlace(res.data.results[0].formatted);
  // };

  // useEffect(() => {
  //   successfulLookup();
  // }, []);

  // const fetchAWC = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://awc-easy.herokuapp.com/readAWC/${awc}`
  //     );

  //     console.log(response);

  //     setAwcData(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchAWC();
  // }, []);

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

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://awc-easy.herokuapp.com/readAwws/${awc}`
        );

        console.log(response);

        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [awc, days]);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos);

        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
      },
      error,
      options
    );
  }, []);

  const attendancePresentClickHandler = (e, d) => {
    e.preventDefault();

    let filtered = sentData.filter((data) => data.name !== d.name);

    setSentData([...filtered, { name: d.name, present: "Present" }]);

    // psetColourClicked(!pcolourClicked);
    // setSentData([...sentData, { name: d.name, present: "Present" }]);
  };

  const attendanceAbsentClickHandler = (e, d) => {
    e.preventDefault();

    let filtered = sentData.filter((data) => data.name !== d.name);

    setSentData([...filtered, { name: d.name, present: "Absent" }]);

    // psetColourClicked(!pcolourClicked);
    // setSentData([...sentData, { name: d.name, present: "Absent" }]);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://awc-easy.herokuapp.com/attendanceEntry`,
        {
          centerCode: localStorage.getItem("code"),
          attendance: sentData,
        }
      );

      console.log(response);

      if (response.statusText === "OK") setStatus(response.data);
    } catch (err) {
      console.log(err);
      setStatus("Something Went Wrong, Try Again.");
    }

    fetchAttendance();
    setIsLoading(false);
  };

  const selectedDays = (days) => {
    console.log(days);
    setDays(days);
  };

  // let regEx1 = new RegExp(`\\b${awcData.streetOrArea}\\b`, "gi");
  // let regEx2 = new RegExp(`\\b${awcData.cityOrVillage}\\b`, "gi");

  // console.log(place);

  useEffect(() => {
    if (
      attendanceDatas?.latitude === String(latitude) &&
      attendanceDatas?.longitude === String(longitude)
    ) {
      console.log(latitude);
      console.log(longitude);
      setSamePlace("Yes");
    } else {
      setSamePlace("No");
    }
  }, [
    attendanceDatas?.latitude,
    attendanceDatas?.longitude,
    latitude,
    longitude,
  ]);

  const listName = data.map((d) => {
    return (
      <div className="w-full flex justify-between p-1" key={d._id}>
        <p>{d.name}</p>
        <div className="w-28 flex justify-between">
          <button
            className="w-2/5 bg-green-600 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            onClick={(e) => attendancePresentClickHandler(e, d)}
          >
            P
          </button>
          <button
            className="w-2/5 bg-red-600 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            onClick={(e) => attendanceAbsentClickHandler(e, d)}
          >
            A
          </button>
        </div>
      </div>
    );
  });

  const listAttendance = attendanceDatas?.attendance?.map((data) => {
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
      <div className="text-center bg-purple-700 text-3xl py-4 text-white mb-4">
        Attendance
      </div>

      {samePlace === "Yes" && (
        <form
          className="w-10/12 h-auto md:w-6/12 mr-auto ml-auto mt-4"
          onSubmit={formSubmitHandler}
        >
          <h1 className="text-center text-blue-800">{status ? status : ""}</h1>

          {listName}

          <button
            type="submit"
            className="w-full h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
          >
            {isLoading ? "..." : "Submit"}
          </button>
        </form>
      )}

      {samePlace === "Loading" && (
        <p className="text-center text-red-600 mb-8">
          Loading... Just Wait a minute.
        </p>
      )}

      {samePlace === "No" && (
        <p className="text-center text-red-600 mb-8">
          You are not in nearby AWC area.
        </p>
      )}

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
