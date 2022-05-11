import React, { useState } from "react";
import styled from "styled-components";

const DropDownAttendance = (props) => {
  //   const [days, setDays] = useState("");

  const dropDownHandler = (e) => {
    console.log(e.target.value);
    // setDays(e.target.value);
    props.selected(e.target.value);
  };

  return (
    <SelectDiv className="w-20 h-8">
      {/* <Label htmlFor="category">Category</Label> */}
      <Select name="days" id="days" onChange={dropDownHandler} title="Choose">
        <Option value="today">Today</Option>
        <Option value="Last Week">Last Week</Option>
        <Option value="Last Month">Last Month</Option>
        <Option value="Last 3 Months">Last 3 Months</Option>
        <Option value="Last Year">Last Year</Option>
      </Select>
    </SelectDiv>
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

export default DropDownAttendance;
