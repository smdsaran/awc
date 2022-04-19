import React, { useState } from "react";

const BoxContainer = (props) => {
  const [clicked, setClicked] = useState(false);

  let awc = localStorage.getItem("code");

  const onClickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto text-center">
      <div onClick={onClickHandler}>
        <p className="py-2 w-full hover:cursor-pointer">
          <strong>Name:</strong>
          {` ${props.data.name}`}
        </p>
        {props.isChild === "child" && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Father's Name:</strong>
            {` ${props.data.fatherName}`}
          </p>
        )}

        {props.isChild === "plady" && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Husband Name:</strong>
            {` ${props.data.husbandName}`}
          </p>
        )}

        {clicked && (
          <div>
            {props.isChild === "child" && (
              <p className="py-2 w-full hover:cursor-pointer">
                <strong>Mother's Name:</strong>
                {` ${props.data.motherName}`}
              </p>
            )}

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>Age:</strong>
              {` ${props.data.age}`}
            </p>

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>DOB:</strong>
              {` ${props.data.dob}`}
            </p>

            {props.isChild === "plady" && (
              <p className="py-2 w-full hover:cursor-pointer">
                <strong>Baby Delivered Date:</strong>
                {` ${props.data.deliveredDate}`}
              </p>
            )}

            {props.isChild === "plady" && (
              <p className="py-2 w-full hover:cursor-pointer">
                <strong>Pregnancy Month:</strong>
                {` ${props.data.pregnancyMonth}`}
              </p>
            )}

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>Mobile No:</strong>
              {` ${props.data.mobile_no}`}
            </p>

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>Address:</strong>
              {` ${props.data.address}`}
            </p>

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>Height:</strong>
              {` ${props.data.height}`}
            </p>

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>Weight:</strong>
              {` ${props.data.weight}`}
            </p>

            <p className="py-2 w-full hover:cursor-pointer">
              <strong>Center Code</strong>
              {`: ${awc}`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BoxContainer;
