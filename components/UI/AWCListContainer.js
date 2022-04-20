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
      <div className="flex justify-evenly">
        <p className="p-2 w-2/4 hover:cursor-pointer text-center text-blue-700">
          <strong className="text-indigo-900">Code:</strong>
          {` ${props.data.centerCode}`}
        </p>
        <p className="p-2 w-2/4 hover:cursor-pointer text-center text-blue-700">
          <strong className="text-indigo-900">Place:</strong>
          {` ${props.data.cityOrVillage}`}
        </p>
      </div>
    </div>
  );
};

export default AWCListContainer;
