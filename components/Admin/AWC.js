import React, { useRef, useState } from "react";
import axios from "axios";

const AWC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const cRef = useRef();
  const dcodeRef = useRef();
  const pincodeRef = useRef();
  const areaRef = useRef();
  const districtRef = useRef();
  const stateRef = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post("https://awc-easy.herokuapp.com/add-awc", {
        centerCode: cRef.current.value,

        divisionCode: dcodeRef.current.value,
        pincode: pincodeRef.current.value,
        cityOrVillage: areaRef.current.value,
        district: districtRef.current.value,
        state: stateRef.current.value,
      });

      console.log(response);

      if (response.statusText === "OK") setStatus(response.data);
    } catch (err) {
      console.log(err);
      setStatus("Something Went Wrong, Try Again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full h-auto mt-10 flex justify-center items-center content-center">
      <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
        <h1 className="text-center text-blue-800">
          {status ? status : "Add/Edit AWC"}
        </h1>
        <input
          type="text"
          placeholder="Center Code"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={cRef}
        />
        <input
          type="text"
          placeholder="Division Code"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={dcodeRef}
        />
        <input
          type="number"
          placeholder="Pincode"
          maxLength="6"
          minLength="6"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={pincodeRef}
        />
        <input
          type="text"
          placeholder="Area"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={areaRef}
        />
        <input
          type="text"
          placeholder="District"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={districtRef}
        />
        <input
          type="text"
          placeholder="State"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={stateRef}
        />
        <button
          type="submit"
          className="w-10/12 h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
        >
          {isLoading ? "..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AWC;
