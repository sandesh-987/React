import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadDetail = () => {
  let [data, setData] = useState({});
  let params = useParams()
  let getPostHouseData = async () =>{
    let result = await axios({
      url: `http://localhost:8000/api/v1/houses/${params.houseId}`,
      method: "GET",
    });
    setData(result.data.data);
  }
  useEffect(() => {
    getPostHouseData();
  }, []);

  return (
    <div>
      <p>address={data.address}</p>
      <p>bedrooms={data.bedrooms}</p>
      <p>bathrooms={data.bathrooms}</p>
      <p>hasgarden={data.hasgarden}</p>
      <p>price={data.price}</p>
    </div>
  );
};
export default ReadDetail;
