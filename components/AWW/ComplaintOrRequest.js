import React, { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const ComplaintOrRequest = (props) => {
  const divisionCode = useRef();
  const subject = useRef();
  const body = useRef();
  const [img, setImg] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const imgFileHandler = (event) => {
    setImg(event.target.files[0]);

    console.log(event);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    fd.append("centerCode", localStorage.getItem("code"));
    fd.append("divisionCode", divisionCode.current.value);
    fd.append("subject", subject.current.value);
    fd.append("body", body.current.value);

    fd.append("photo", img);

    console.log(fd.get("photo"));

    try {
      setIsLoading(true);

      const response = await axios.post(
        `http://localhost:3001/add-complaint`,
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

  return (
    <>
      <div className="text-center bg-purple-700 text-3xl py-4 text-white">
        Complaint/Requests
      </div>

      <div className="w-full h-auto mt-10 flex justify-center items-center content-center my-4">
        <form
          className="w-10/12 h-auto md:w-6/12"
          onSubmit={formSubmitHandler}
          encType="multipart/form-data"
        >
          <h1 className="text-center text-blue-800">
            {status ? status : "Add"}
          </h1>

          <input
            type="text"
            placeholder="Division Code"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={divisionCode}
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={subject}
          />
          <textarea
            type="text"
            placeholder="Body"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={body}
          />

          <Label className="w-10/12">
            <Input
              itsImage
              type="file"
              name="photo"
              onChange={imgFileHandler}
            />
            <FontAwesomeIcon icon={faImages} /> Upload
          </Label>

          {img && (
            <AddedImagesDiv className="w-10/12">
              <H4>Added Image</H4>
              {img.name}
            </AddedImagesDiv>
          )}

          <button
            type="submit"
            className="w-10/12 h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
          >
            {isLoading ? "..." : "Submit"}
          </button>
        </form>
      </div>
    </>
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

export default ComplaintOrRequest;
