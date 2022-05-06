import React, { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StockDetailsContainer from "../UI/StockDetailsContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const StockManagement = () => {
  const oilInLitre = useRef();
  const pulseInKg = useRef();
  const nutritionFlourInPacket = useRef();
  const eggInNum = useRef();
  const riceInKg = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [img, setImg] = useState(null);

  const imgFileHandler = (event) => {
    setImg(event.target.files[0]);

    console.log(event);
  };

  const deliveredOnClickHandler = async (e) => {
    e.preventDefault();

    fd.append("centerCode", localStorage.getItem("code"));
    fd.append("oilInLitre", oilInLitre.current.value);
    fd.append("pulseInKg", pulseInKg.current.value);
    fd.append("nutritionFlourInPacket", nutritionFlourInPacket.current.value);
    fd.append("eggInNum", eggInNum.current.value);
    fd.append("riceInKg", riceInKg.current.value);
    fd.append("photo", img);

    try {
      setIsLoading(true);

      const response = await axios.post(
        `http://localhost:3001/addStockDetails`,
        fd
      );

      console.log(response);

      if (response.statusText === "OK") setStatus(response.data);
    } catch (err) {
      console.log(err);
      setStatus("Something Went Wrong, Try Again.");
    }

    setIsLoading(false);
  };

  const exixtingOnClickHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `http://localhost:3001/existingStockDetails`,
        {
          centerCode: localStorage.getItem("code"),
          oilInLitre: oilInLitre.current.value,
          pulseInKg: pulseInKg.current.value,
          nutritionFlourInPacket: nutritionFlourInPacket.current.value,
          eggInNum: eggInNum.current.value,
          riceInKg: riceInKg.current.value,
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
    <div>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Stock Management
      </div>

      <div className="w-full h-auto mt-10 flex justify-center items-center content-center my-4">
        <form
          className="w-10/12 h-auto md:w-6/12"
          encType="multipart/form-data"
        >
          <h1 className="text-center text-blue-800">
            {status ? status : "Add"}
          </h1>
          <input
            type="text"
            placeholder="Oils In Litre"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={oilInLitre}
          />
          <input
            type="text"
            placeholder="Pulse In Kg"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={pulseInKg}
          />
          <input
            type="text"
            placeholder="Rice In Kg"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={riceInKg}
          />
          <input
            type="text"
            placeholder="Nutrition Flour In Packets"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={nutritionFlourInPacket}
          />
          <input
            type="text"
            placeholder="Eggs In Num"
            className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={eggInNum}
          />

          <Label className="w-full">
            <Input
              itsImage
              type="file"
              name="photo"
              onChange={imgFileHandler}
            />
            <FontAwesomeIcon icon={faImages} /> Upload
          </Label>

          {img && (
            <AddedImagesDiv className="w-full">
              <H4>Added Image</H4>
              {img.name}
            </AddedImagesDiv>
          )}

          <button
            type="submit"
            className="w-full h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
            onClick={deliveredOnClickHandler}
          >
            {isLoading ? "..." : "Submit"}
          </button>

          <button
            type="submit"
            className="w-full h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
            onClick={exixtingOnClickHandler}
          >
            {isLoading ? "..." : "Update"}
          </button>
        </form>
      </div>

      <StockDetailsContainer />
    </div>
  );
};

const Label = styled.label`
  font-size: 18px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #30e240;
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #f4290d;
  font-weight: bold;
  padding-top: 5px;
  cursor: pointer;
  border-radius: 5px;
`;

const Input = styled.input`
  // width: 80%;
  height: 40px;
  margin-bottom: 20px;
  display: ${(props) => (props.itsImage ? "none" : "block")};
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #143365;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;

  ::placeholder {
    text-align: center;
    font-size: 18px;
  }

  :-ms-input-placeholder {
    text-align: center;
    font-size: 18px;
  }

  @media (max-width: 799px) {
    border: 1px solid #143365;
  }
`;

const AddedImagesDiv = styled.div`
  // width: 90%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #143365;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 799px) {
    border: 1px solid #143365;
  }
`;

const H4 = styled.h5`
  text-align: center;
  margin: 2px;
`;

export default StockManagement;
