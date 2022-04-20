import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const BoxContainerPLadies = (props) => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  let awc = localStorage.getItem("code");

  const onClickHandler = () => {
    setClicked(!clicked);
  };

  const editClickHandler = async (e) => {
    router.push(`/aww-dashboard/edit/${props.isChild}/${props.data._id}`);
  };

  const deleteHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.delete(
        `https://awc-easy.herokuapp.com/delete-${props.isChild}`,
        {
          data: {
            id: props.data._id,
            centerCode: awc,
          },
        }
      );

      console.log(response);

      props.edited();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto text-center">
      <div onClick={onClickHandler}>
        <p className="py-2 w-full hover:cursor-pointer text-blue-700">
          <strong className="text-indigo-900">Name:</strong>
          {` ${props.data.name}`}
        </p>

        <p className="py-2 w-full hover:cursor-pointer text-blue-700">
          <strong className="text-indigo-900">Husband Name:</strong>
          {` ${props.data.husbandName}`}
        </p>

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Age:</strong>
            {` ${props.data.age}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>DOB:</strong>
            {` ${props.data.dob}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Baby Delivered Date:</strong>
            {` ${props.data.deliveredDate}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Pregnancy Month:</strong>
            {` ${props.data.pregnancyMonth}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Mobile No:</strong>
            {` ${props.data.mobile_no}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Address:</strong>
            {` ${props.data.address}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Height:</strong>
            {` ${props.data.height}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Weight:</strong>
            {` ${props.data.weight}`}
          </p>
        )}

        {clicked && (
          <p className="py-2 w-full hover:cursor-pointer">
            <strong>Center Code</strong>
            {`: ${awc}`}
          </p>
        )}
      </div>

      <div className="flex">
        <button
          className="py-2 mx-10 w-full hover:cursor-pointer text-green-600"
          onClick={editClickHandler}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>

        <button
          className="py-2 mx-10 w-full hover:cursor-pointer text-red-600"
          onClick={deleteHandler}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default BoxContainerPLadies;
