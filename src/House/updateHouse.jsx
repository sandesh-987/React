import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateHouse = () => {
  let [address, setAddress] = useState("");
  let [bedrooms, setBedrooms] = useState("");
  let [bathrooms, setBathrooms] = useState("");
  let [price, setPrice] = useState("");
  let [hasGarden, setHasGarden] = useState("");
  let houseID = "64c322d61bd38aa632b8a2d9";
  const getAllHouse = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/houses/${houseID}`,
      method: `GET`,
    });
    let Houses = result.data.data;
    setAddress(Houses.address);
    setBedrooms(Houses.bedrooms);
    setBathrooms(Houses.bathrooms);
    setPrice(Houses.price);
    setHasGarden(Houses.hasGarden);
  };
  useEffect(() => {
    getAllHouse();
  }, []);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          let data = {
            address: address,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            price: price,
            hasGarden: hasGarden,
          };

          // console.log(data);
          let results = await axios({
            url: `http://localhost:8000/api/v1/houses/${houseID}`,
            method: "PATCH",
            data: data,
          });
        }}
      >
        <div>
          <label htmlFor="address">address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="bedrooms">bedrooms</label>
          <input
            type="text"
            id="bedrooms"
            value={bedrooms}
            onChange={(e) => {
              setBedrooms(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="bathrooms">bathrooms</label>
          <input
            type="text"
            id="bathrooms"
            value={bathrooms}
            onChange={(e) => {
              setBathrooms(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="hasGarden">hasgarden</label>
          <input
            type=""
            id="hasGarden"
            value={hasGarden}
            onChange={(e) => {
              setHasGarden(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="price">price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateHouse;
