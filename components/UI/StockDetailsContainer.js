import React, { useEffect, useState } from "react";
import axios from "axios";

const StockDetailsContainer = () => {
  const [data, setData] = useState({});
  const [image, setImage] = useState("");

  let awc = localStorage.getItem("code");

  const fetchImages = async (url) => {
    let res = await fetch(url);

    let data = res.url;

    console.log(data);
    setImage(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://awc-easy.herokuapp.com/view-stocks/${awc}`
        );

        console.log(response);

        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [awc]);

  let imgName = data?.delivered?.billImage;

  useEffect(() => {
    if (imgName)
      return fetchImages(`https://awc-easy.herokuapp.com/uploads/${imgName}`);
  }, [imgName]);

  // console.log(data?.delivered?.billImage);

  // let dataView;
  // if (data === ) {
  //   dataView = <div>No Stock Details Available.</div>;
  // } else {

  return (
    <>
      {data.deliveryDate && (
        <div className="w-10/12 md:w-6/12 h-auto shadow-lg my-4 block ml-auto mr-auto">
          <div className="w-10/12 md:w-6/12 h-auto my-4 block ml-auto mr-auto">
            <div className="w-full flex mt-4 justify-between">
              <h2 className="font-bold text-lg">Delivered Quantities</h2>
              <p className="text-red-600">{`${data.deliveryDate}`}</p>
            </div>

            <p>{`Oil${"         "} = ${data.delivered.oilInLitre} L`}</p>
            <p>{`Pulse             = ${data.delivered.pulseInKg} Kg`}</p>
            <p>{`Nutritional Flour = ${data.delivered.nutritionFlourInPacket} Packets`}</p>
            <p>{`Egg               = ${data.delivered.eggInNum} Plates`}</p>
            <p>{`Rice              = ${data.delivered.riceInKg} Kg`}</p>
          </div>

          <hr />

          <div className="w-10/12 md:w-6/12 h-auto my-4 block ml-auto mr-auto">
            <h2 className="font-bold text-lg">Remaining Quantities</h2>
            <p>{`Oil               = ${
              Number(data.delivered.oilInLitre) -
              Number(data.existing.oilInLitre)
            } L`}</p>
            <p>{`Pulse             = ${
              Number(data.delivered.pulseInKg) - Number(data.existing.pulseInKg)
            } Kg`}</p>
            <p>{`Nutritional Flour = ${
              Number(data.delivered.nutritionFlourInPacket) -
              Number(data.existing.nutritionFlourInPacket)
            } Packets`}</p>
            <p>{`Egg               = ${
              Number(data.delivered.eggInNum) - Number(data.existing.eggInNum)
            } Plates`}</p>
            <p>{`Rice              = ${
              Number(data.delivered.riceInKg) - Number(data.existing.riceInKg)
            } Kg`}</p>
          </div>

          <hr />

          <img
            src={image}
            alt="Bill Image"
            className="w-10/12 md:w-6/12 h-auto mt-4 mb-4 block ml-auto mr-auto"
          />
        </div>
      )}
    </>
  );
};

export default StockDetailsContainer;
