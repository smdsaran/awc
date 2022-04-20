import React, { useState, useEffect } from "react";
import BoxContainerViewOnly from "../UI/BoxContainerViewOnly";
import Search from "../UI/Search";
import axios from "axios";

const Childrens = () => {
  const [datas, setDatas] = useState([]);

  let awc = localStorage.getItem("code");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://awc-easy.herokuapp.com/view-children/${awc}`
      );

      console.log(response);

      setDatas(response.data.children);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [awc]);

  let listing;

  if (datas !== undefined) {
    listing = datas.map((data) => {
      return (
        <BoxContainerViewOnly data={data} key={data._id} isChild="child" />
      );
    });
  }

  const searchHandler = (data) => {
    setDatas(data);
  };

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Children
      </div>
      <Search
        isChildShort="children"
        isChild="Children"
        searching={searchHandler}
      />
      <div className="mb-96">{listing}</div>
    </div>
  );
};

export default Childrens;
