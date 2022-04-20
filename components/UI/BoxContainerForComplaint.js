import React from "react";

const BoxContainer = (props) => {
  console.log(props.image);

  return (
    <div className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto text-center p-4">
      <p className="py-2 w-full text-blue-700">
        <strong className="text-indigo-900">Center Code:</strong>
        {` ${props.data.centerCode}`}
      </p>

      <p className="py-2 w-full">
        <strong>{` ${props.data.subject}`}</strong>
      </p>

      <p className="py-2 w-full">{` ${props.data.body}`}</p>

      <img
        src={props.image}
        className="w-4/5 h-auto block ml-auto mr-auto mb-8 mt-8 rounded-lg"
        alt="image"
      />
    </div>
  );
};

export default BoxContainer;
