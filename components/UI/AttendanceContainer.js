import React from "react";

const AttendanceContainer = (props) => {
  const listing = props.datas.map((data) => {
    return (
      <div className="w-full flex justify-between p-2" key={data._id}>
        <p className="w-2/5 bg-blue-700 text-white">{data.name}</p>
        <p>---</p>
        <p className="w-2/5 bg-green-600 text-white">{data.present}</p>
      </div>
    );
  });

  return (
    <div className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto text-center">
      <p className="text-red-600 ">{props.date}</p>
      <div className="w-4/5 block mr-auto ml-auto"> {listing}</div>
    </div>
  );
};

export default AttendanceContainer;
