import React, { useState, useEffect } from "react";
import axios from "axios";
import StudiesForm from "./StudiesForm";

const Studies = () => {
  const [datas, setDatas] = useState([]);

  let awc = localStorage.getItem("code");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://awc-easy.herokuapp.com/view-studymaterials/${awc}`
      );

      console.log(response);

      setDatas(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [awc]);

  const formSubmitted = () => {
    fetchData();
  };

  let listing;

  if (datas !== undefined) {
    listing = datas.map((data) => {
      return (
        <div
          className="w-4/5 md:w-60 h-80 block ml-auto mr-auto md:m-3"
          key={data._id}
        >
          <iframe
            className="w-full h-4/5"
            src={`https://www.youtube.com/embed/${data.link}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture"
          ></iframe>

          <h4 className="w-full h-1/5 p-2">{data.title}</h4>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Studies Collection
      </div>
      <StudiesForm submited={formSubmitted} />

      <div className="w-full h-auto flex flex-wrap flex-col justify-center md:flex-row md:justify-start">
        {listing}
      </div>
    </div>
  );
};

export default Studies;
