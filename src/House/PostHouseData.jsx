import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PostHouseData = () => {
  let [address, setAddress] = useState("");
  let [bedrooms, setBedRoom] = useState("");
  let [bathrooms, setBathRoom] = useState("");
  let [hasGarden, setHasGarden] = useState("");
  let [price, setprice] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            address: address,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            hasGarden: hasGarden,
            price:price
          };
          let results = await axios({
            url: "http://localhost:8000/api/v1/houses",
            method: "post",
            data: data,
          });
          Navigate("/house")
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
              setBedRoom(e.target.value);
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
              setBathRoom(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="hasGarden">hasgarden</label>
          <input
            type="null" 
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
              setprice(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default PostHouseData;
