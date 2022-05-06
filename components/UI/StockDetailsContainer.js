import React, { useEffect, useState } from "react";
import axios from "axios";

const StockDetailsContainer = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState("");

  let awc = localStorage.getItem("code");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/view-stocks/${awc}`
      );

      console.log(response);

      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchImages = async (url) => {
    let res = await fetch(url);

    let data = res.url;

    console.log(data);
    setImage(data);
  };

  useEffect(() => {
    fetchData();
    fetchImages(`http://localhost:3001/uploads/${data.billImage}`);
  }, [awc]);

  console.log(data);

  let dataView;
  if (data === {}) {
    dataView = <div>No Stock Details Available.</div>;
  } else {
    dataView = (
      <div>
        <p>{data.deliveryDate}</p>
        <p>{data.delivered.oilInLitre}</p>
        <p>{data.delivered.pulseInKg}</p>
        <p>{data.delivered.nutritionFlourInPacket}</p>
        <p>{data.delivered.eggInNum}</p>
        <p>{data.delivered.riceInKg}</p>

        <p>{data.existing.oilInLitre}</p>
        <p>{data.existing.pulseInKg}</p>
        <p>{data.existing.nutritionFlourInPacket}</p>
        <p>{data.existing.eggInNum}</p>
        <p>{data.existing.riceInKg}</p>
        <img src={image} alt="Bill Image" />
      </div>
    );
  }

  return <>{dataView}</>;
};

export default StockDetailsContainer;
