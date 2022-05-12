import React, { useState, useEffect } from "react";
import BoxContainerViewOnly from "../UI/BoxContainerViewOnly";
import Search from "../UI/Search";
import axios from "axios";
import styled from "styled-components";

const PregnantLadies = () => {
  const [datas, setDatas] = useState([]);
  const [found, setFound] = useState("");

  let awc = localStorage.getItem("code");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://awc-easy.herokuapp.com/view-pladies/${awc}`
      );

      console.log(response);

      setDatas(response.data.pregnantLadies);
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
        <BoxContainerViewOnly data={data} key={data._id} isChild="plady" />
      );
    });
  }

  const searchHandler = (data) => {
    if (data.length === 0) setFound("No Details Found.");
    else setFound("Details Found.");

    setDatas(data);
  };

  return (
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Pregnant Ladies
      </div>
      <Search
        isChildShort="pladies"
        isChild="Pregnant Ladies"
        searching={searchHandler}
      />

      <P className="text-center" isFound={found}>
        {found}
      </P>

      <div className="mb-96">{listing}</div>
    </div>
  );
};

const P = styled.p`
  color: ${(props) => (props.isFound === "Details Found." ? "green" : "red")};
`;

export default PregnantLadies;
