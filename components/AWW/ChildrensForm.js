import React, { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ChildrensForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

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

  const [isBabyDelivered, setIsBabyDelivered] = useState("");
  const [deliveredDate, setDeliveredDate] = useState("Nil");
  const [pregnancyMonth, setPregnancyMonth] = useState("Nil");

  const husbandNameRef = useRef();

  const dropDownHandler = (e) => {
    console.log(e.target.value);
    setIsBabyDelivered(e.target.value);
  };

  const deliveryDateHandler = (e) => {
    setDeliveredDate(e.target.value);
  };

  const pregnancyMonthHandler = (e) => {
    setPregnancyMonth(e.target.value);
  };
  // const isBabyDeliveredRef = useRef();
  // const deliveredDateRef = useRef();
  // const pregnancyMonthRef = useRef();

  // let babyDelivered = "";
  // if (props.isChildShort === "plady") {
  //   babyDelivered =
  //     isBabyDeliveredRef.current.value === undefined
  //       ? ""
  //       : isBabyDeliveredRef.current.value;
  // }

  // let deliveredDate;
  // let pregnancyMonth;

  // if (props.isChildShort === "plady") {
  //   deliveredDate =
  //     deliveredDateRef.current.value === undefined
  //       ? "Nil"
  //       : deliveredDateRef.current.value;

  //   pregnancyMonth =
  //     pregnancyMonthRef.current.value === undefined
  //       ? "Nil"
  //       : pregnancyMonthRef.current.value;
  // }

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (props.isChildShort === "child") {
        const response = await axios.post(
          `https://awc-easy.herokuapp.com/add-${props.isChildShort}`,
          {
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
          }
        );

        console.log(response);

        if (response.statusText === "OK") setStatus(response.data);
      } else {
        const response = await axios.post(
          `https://awc-easy.herokuapp.com/add-${props.isChildShort}`,
          {
            centerCode: centerCodeRef.current.value,

            name: nameRef.current.value,
            age: ageRef.current.value,
            dob: dobRef.current.value,
            husbandName: husbandNameRef.current.value,
            deliveredDate: deliveredDate,
            pregnancyMonth: pregnancyMonth,
            mobile_no: mobRef.current.value,
            address: addressRef.current.value,
            height: heightRef.current.value,
            weight: weightRef.current.value,
          }
        );

        console.log(response);

        if (response.statusText === "OK") setStatus(response.data);
        setDeliveredDate("Nil");
        setPregnancyMonth("Nil");
      }
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
          placeholder="Center Code"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={centerCodeRef}
        />
        <input
          type="text"
          placeholder={`${props.isChild} Name`}
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={nameRef}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={ageRef}
        />
        <input
          type="text"
          placeholder="Date"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={dobRef}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        {props.isChildShort === "child" && (
          <input
            type="text"
            placeholder="Father's Name"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={fatherNameRef}
          />
        )}

        {props.isChildShort === "child" && (
          <input
            type="text"
            placeholder="Mother's Name"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={motherNameRef}
          />
        )}

        {props.isChildShort === "plady" && (
          <input
            type="text"
            placeholder="Husband Name"
            className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
            ref={husbandNameRef}
          />
        )}

        {props.isChildShort === "plady" && (
          <SelectDiv className="w-10/12">
            {/* <Label htmlFor="category">Category</Label> */}
            <Select
              name="babydelivered?"
              id="babydelivered?"
              onChange={dropDownHandler}
            >
              <Option value="choose">Baby Delivered ?</Option>
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </SelectDiv>
        )}

        {props.isChildShort === "plady" && (
          <div>
            {isBabyDelivered === "Yes" && (
              <input
                type="text"
                placeholder="Delivered Date"
                className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
                onChange={deliveryDateHandler}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
            )}

            {isBabyDelivered === "No" && (
              <input
                type="number"
                placeholder="Pregnancy Month"
                className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
                onChange={pregnancyMonthHandler}
              />
            )}
          </div>
        )}

        <input
          type="number"
          placeholder="Mobile No"
          pattern="[0-9]{10}"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={mobRef}
        />

        <input
          type="text"
          placeholder="Address"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={addressRef}
        />

        <input
          type="text"
          placeholder="Height in cm"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={heightRef}
        />

        <input
          type="text"
          placeholder="Weight in Kg"
          className="w-10/12 border rounded-sm border-black my-4 text-center block mr-auto ml-auto"
          ref={weightRef}
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

const SelectDiv = styled.div`
  // width: 90%;
  // height: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  // font-size: 18px;
  border: 2px solid #143365;
  border-radius: 5px;

  @media (max-width: 799px) {
    border: 1px solid #143365;
  }
`;

const Option = styled.option`
  width: 80%;
  height: 40px;
  text-align: center;
  font-size: 16px;
`;

export default ChildrensForm;
