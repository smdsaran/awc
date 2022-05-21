import React, { useRef, useState } from "react";
import axios from "axios";
import encrypt from "../../lib/Crypto";
import styled from "styled-components";

const Announcement = (props) => {
  // const body = useRef();

  const [body, setBody] = useState("");
  const [sendTo, setSendTo] = useState("PLadies");

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  let encryptedBody = encrypt(body);

  const bodyChangeHandler = (e) => {
    setBody(e.target.value);
  };

  const dropDownHandler = (e) => {
    console.log(e.target.value);
    setSendTo(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://awc-easy.herokuapp.com/announcement`,
        {
          centerCode: localStorage.getItem("code"),
          body: encryptedBody,
          sendTo: sendTo,
        }
      );

      console.log(response);

      if (response.statusText === "OK") setStatus(response.data);
    } catch (err) {
      console.log(err);
      setStatus("Something Went Wrong, Try Again.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Announcements
      </div>

      <div className="w-full h-auto mb-96 mt-10 flex justify-center items-center content-center my-4">
        <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
          <h1 className="text-center text-blue-800">
            {status ? status : "Add"}
          </h1>

          <textarea
            type="text"
            rows="5"
            placeholder="Body"
            className="w-full border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            onChange={bodyChangeHandler}
          />

          <SelectDiv className="w-full h-8">
            {/* <Label htmlFor="category">Category</Label> */}
            <Select name="To" id="To" onChange={dropDownHandler}>
              <Option value="PLadies">To</Option>
              <Option value="PLadies">Pregnant Ladies</Option>
              <Option value="Children">Children</Option>
            </Select>
          </SelectDiv>

          <button
            type="submit"
            className="w-full h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
          >
            {isLoading ? "..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

const SelectDiv = styled.div`
  // width: 90%;
  // height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  // font-size: 18px;
  border: 2px solid #143365;
  border-radius: 5px;

  @media (max-width: 799px) {
    border: 1px solid #143365;
  }
`;

const Option = styled.option`
  width: 80%;
  height: 40px;
  text-align: center;
  font-size: 16px;
`;

export default Announcement;
