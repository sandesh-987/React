import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ReadAll = () => {
  let [house, setHouse] = useState([]);
  let getAllHouse = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/houses`,
      method: "GET",
    });
    // console.log(result.data.data.results);
    setHouse(result.data.data.results);
  };
  useEffect(() => {
    getAllHouse();
  }, []);
  // let contacts = [
  //   {
  //     fullName: "nitan thapa",
  //     address: "gagalphedi",
  //     phoneNumber: "9849468999",
  //     email: "nitanthapa425@gmail.com",
  //   },
  //   {
  //     fullName: "utshab thapa",
  //     address: "gagalphedi",
  //     phoneNumber: "9849468998",
  //     email: "utshabthapa425@gmail.com",
  //   },
  //   {
  //     fullName: "ram thapa",
  //     address: "gagalphedi",
  //     phoneNumber: "9849468990",
  //     email: "abthapa425@gmail.com",
  //   },
  // ];
  return (
    <div>
      {house.map((value, i) => {
        return (
          <div
            key={i}
            style={{ border: "3px solid green", marginBottom: "10px" }}
          >
            <p> address of house{value.address}</p>
            <p>number of bedrooms {value.bedrooms}</p>
            <p>number of bathrooms {value.bathrooms}</p>
            <p>total price {value.price}</p>
            <p>house garden {value.hasGarden}</p>
            <button
              onClick={async () => {
                let result = await axios({
                  url: `http://localhost:8000/api/v1/houses/640843baeb8a5a9da8f5e567`,
                  method: "DELETE",
                });
                getAllHouse();
              }}
            >
              delete
            </button>
            <button onClick={()=>{
              Navigate(`/house/${value._id}`)
            }}>View</button>
          </div>
        );
      })}
    </div>
  );
};
export default ReadAll;
