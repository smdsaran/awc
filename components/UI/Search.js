import React, { useRef } from "react";
import styled from "styled-components";
import axios from "axios";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  const searchRef = useRef();

  const keypressHandler = async (e) => {
    if (e.key === "Enter") {
      try {
        const response = await axios.post(
          `http://localhost:3001/search-${props.isChildShort}`,

          {
            search: searchRef.current.value,
            centerCode: localStorage.getItem("code"),
          }
        );

        searchRef.current.value = "";
        props.searching(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <SearchBar
        type="search"
        placeholder={`Search ${props.isChild}`}
        ref={searchRef}
        onKeyDown={keypressHandler}
      />
    </>
  );
};

const SearchBar = styled.input`
  width: 50%;
  height: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 2px solid #1a0640;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  color: #1a0640;
  padding: 10px;

  @media (max-width: 799px) {
    width: 95%;
  }
`;

const Div = styled.div`
  float: right;
  margin-right: 10px;
  padding-bottom: 40px;
`;

export default Search;
