import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AppBar from "../../../../components/Layout/AppBarMuiForAWW";
import Footer from "../../../../components/Layout/Footer";

const EditChild = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const router = useRouter();

  const [data, setData] = useState({});

  let awc = localStorage.getItem("code");
  let id = router.query.childOrPladyId;

  const centerCodeRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const dobRef = useRef();
  const fatherNameRef = useRef();
  const motherNameRef = useRef();
  const mobRef = useRef();
  const addressRef = useRef();
  const heightRef = useRef();
  const weightRef = useRef();

  // const [centerCode, setCenterCode] =  useState("");
  // const [name, setName] =  useState("");
  // const [age, setAge] =  useState("");
  // const [dob, setDob] =  useState("");
  // const [fatherName, setFatherName] =  useState("");
  // const [motherName, setMotherName] =  useState("");
  // const [mobile_no, setMob] =  useState("");
  // const [address, setAddress] =  useState("");
  // const [height, setHeight] =  useState("");
  // const [height, setzzzzzz] =  useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/get-child/${awc}/${id}`
        );

        console.log(response);

        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [awc, id]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.put("http://localhost:3001/edit-child", {
        centerCode: centerCodeRef.current.value,

        name: nameRef.current.value,
        age: ageRef.current.value,
        dob: dobRef.current.value,
        fatherName: fatherNameRef.current.value,
        motherName: motherNameRef.current.value,
        mobile_no: mobRef.current.value,
        address: addressRef.current.value,
        height: heightRef.current.value,
        weight: weightRef.current.value,
        id: id,
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
    <>
      <AppBar />
      <div className="w-full h-auto mt-10 flex justify-center items-center content-center my-4">
        <form className="w-10/12 h-auto md:w-6/12" onSubmit={formSubmitHandler}>
          <h1 className="text-center text-blue-800">
            {status ? status : "Edit Children"}
          </h1>
          <input
            type="text"
            placeholder="Center Code"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={centerCodeRef}
            defaultValue={awc}
          />
          <input
            type="text"
            placeholder="Child Name"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={nameRef}
            defaultValue={data.name}
          />
          <input
            type="number"
            placeholder="Age"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={ageRef}
            defaultValue={data.age}
          />
          <input
            type="date"
            placeholder="Date"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={dobRef}
            defaultValue={data.dob}
          />
          <input
            type="text"
            placeholder="Father's Name"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={fatherNameRef}
            defaultValue={data.fatherName}
          />
          <input
            type="text"
            placeholder="Mother's Name"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={motherNameRef}
            defaultValue={data.motherName}
          />

          <input
            type="number"
            placeholder="Mobile No"
            pattern="[0-9]{10}"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={mobRef}
            defaultValue={data.mobile_no}
          />

          <input
            type="text"
            placeholder="Address"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={addressRef}
            defaultValue={data.address}
          />

          <input
            type="text"
            placeholder="Height in cm"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={heightRef}
            defaultValue={data.height}
          />

          <input
            type="text"
            placeholder="Weight in Kg"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={weightRef}
            defaultValue={data.weight}
          />

          <button
            type="submit"
            className="w-10/12 h-10 border rounded-sm bg-red-500 m-2 text-white block mr-auto ml-auto hover:bg-green-500"
          >
            {isLoading ? "..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

// export async function getStaticProps() {
//     // fetch data from an api

//     return {
//         props: {
//         data: data from api
//         },
//         revalidate: 10   // 10 is a second. Regenerate the page every 10 sec. So data not be a old pr outdated.
//     }
// }

export default EditChild;
