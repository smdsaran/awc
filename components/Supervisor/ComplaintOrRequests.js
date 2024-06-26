import React, { useState, useEffect } from "react";
import BoxContainerForComplaint from "../UI/BoxContainerForComplaint";
import axios from "axios";

const ComplaintOrRequests = () => {
  const [datas, setDatas] = useState([]);
  const [image, setImage] = useState("");

  let dcode = localStorage.getItem("dcode");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://awc-easy.herokuapp.com/view-complaint/${dcode}`
      );

      console.log(response);

      setDatas(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dcode]);

  const fetchImages = async (url) => {
    let res = await fetch(url);

    let data = res.url;

    console.log(data);
    setImage(data);
  };

  let listing;

  if (datas !== undefined) {
    listing = datas.map((data) => {
      fetchImages(`https://awc-easy.herokuapp.com/uploads/${data.image}`);

      // fetchImagesWithAxios(`http://localhost:3001/fetch-image/${data.image}`);

      return (
        <BoxContainerForComplaint data={data} key={data._id} image={image} />
      );
    });
  }

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Complaints/Requests
      </div>

      <div className="mb-96">{listing}</div>
    </div>
  );
};

export default ComplaintOrRequests;
