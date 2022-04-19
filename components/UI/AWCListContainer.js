import React from "react";
import { useRouter } from "next/router";

const AWCListContainer = (props) => {
  const router = useRouter();

  const awcOpenHandler = () => {
    localStorage.setItem("code", props.data.centerCode);

    router.push("/supervisor-dashboard/awc");
  };

  return (
    <div
      className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto hover:cursor-pointer"
      onClick={awcOpenHandler}
    >
      <p className="py-2 w-full hover:cursor-pointer">
        <strong>Code:</strong>
        {` ${props.data.centerCode}`}
      </p>
      <p className="py-2 w-full hover:cursor-pointer">
        <strong>Place:</strong>
        {` ${props.data.cityOrVillage}`}
      </p>
    </div>
  );
};

export default AWCListContainer;
