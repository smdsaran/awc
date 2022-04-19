import React, { useEffect, useState } from "react";
import AWCListContainer from "../UI/AWCListContainer";
import axios from "axios";

const AWCLists = () => {
  const [datas, setDatas] = useState([]);

  let dcode = localStorage.getItem("dcode");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/all-awc/${dcode}`
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

  let lists;

  if (datas !== undefined) {
    lists = datas.map((data) => {
      return <AWCListContainer data={data} key={data._id} />;
    });
  }

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        AWC Lists
      </div>

      {lists}
    </div>
  );
};

export default AWCLists;
