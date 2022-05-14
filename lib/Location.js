import axios from "axios";

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

  return res.data.results[0].formatted;
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

export default getLocation;
