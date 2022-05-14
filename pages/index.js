import React, { useState } from "react";
import UserLogin from "../components/Login/Login";
import Appbar from "../components/Layout/AppBar";
import Footer from "../components/Layout/Footer";
import axios from "axios";

const UserLoginPage = () => {
  const [place, setPlace] = useState("");

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const successfulLookup = async (position) => {
    const { latitude, longitude } = position.coords;

    console.log(latitude, longitude);

    const res = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?key=8e0dfdbc7d6341afbbff9e84bc1b39a6&q=${latitude}+${longitude}`
    );

    console.log(res.data.results[0].formatted);

    // .then((res) => res.json())
    // .then((resp) => resp);

    setPlace(res.data.results[0].formatted);
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(
        successfulLookup,
        error,
        options
      );
    }
  };

  getLocation();

  return (
    <div>
      <Appbar />
      <UserLogin />
      <p>{place}</p>
      <Footer />
    </div>
  );
};

export default UserLoginPage;
