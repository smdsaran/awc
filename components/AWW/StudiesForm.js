import React, { useRef, useState } from "react";
import axios from "axios";

const Studies = (props) => {
  const title = useRef();
  const link = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        `https://awc-easy.herokuapp.com/addStudyMaterials`,
        {
          centerCode: localStorage.getItem("code"),
          title: title.current.value,
          link: link.current.value,
        }
      );

      console.log(response);

      if (response.statusText === "OK") setStatus(response.data);
    } catch (err) {
      console.log(err);
      setStatus("Something Went Wrong, Try Again.");
    }

    setIsLoading(false);
    props.submited();
  };

  return (
    <div className="w-full h-auto mt-10 flex justify-center items-center content-center my-4">
      <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
        <h1 className="text-center text-blue-800">{status ? status : "Add"}</h1>
        <input
          type="text"
          placeholder="Title"
          className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={title}
        />
        <input
          type="text"
          placeholder="Link"
          className="w-full h-8 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={link}
        />

        <button
          type="submit"
          className="w-full h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
        >
          {isLoading ? "..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Studies;
