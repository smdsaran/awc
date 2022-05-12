import React, { useState, useEffect } from "react";
import ChildrensForm from "./ChildrensForm";
import BoxContainer from "../UI/BoxContainer";
import Search from "../UI/Search";
import axios from "axios";
import styled from "styled-components";

const Childrens = () => {
  const [datas, setDatas] = useState([]);
  const [found, setFound] = useState("");

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

  const editOrDelete = () => {
    fetchData();
  };

  const formSubmitted = () => {
    fetchData();
  };

  let listing;

  if (datas !== undefined) {
    listing = datas.map((data) => {
      return (
        <BoxContainer
          data={data}
          edited={editOrDelete}
          key={data._id}
          isChild="child"
        />
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
        Children
      </div>
      <Search
        isChildShort="children"
        isChild="Children"
        searching={searchHandler}
      />

      <P className="text-center" isFound={found}>
        {found}
      </P>

      <ChildrensForm
        submited={formSubmitted}
        isChild="Child"
        isChildShort="child"
      />
      {listing}
    </div>
  );
};

const P = styled.p`
  color: ${(props) => (props.isFound === "Details Found." ? "green" : "red")};
`;

export default Childrens;
