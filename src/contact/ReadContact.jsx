import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ReadContact = () => {
  let [contacts, setContacts] = useState([]);
  let navigate=useNavigate()
  let getAllContact = async () => {
    let result = await axios({
      url: " http://localhost:8000/api/v1/contacts",
      method: "GET",
    });
    // console.log(result.data.data.results);
    setContacts(result.data.data.results);
  };
  useEffect(() => {
    getAllContact();
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
      {contacts.map((value, i) => {
        return (
          <div
            key={i}
            style={{ border: "3px solid green", marginBottom: "10px" }}
          >
            <p>my name is {value.fullName}</p>
            <p>i live in {value.address}</p>
            <p>my phone number is {value.phoneNumber}</p>
            <p>my email address is {value.email}</p>
            <button
              onClick={async () => {
                let result = await axios({
                  url: `http://localhost:8000/api/v1/contacts/640843baeb8a5a9da8f5e567`,
                  method: "DELETE",
                });
                getAllContact();
              }}
            >
              delete
            </button>
            <button onClick={()=>{
              navigate(`/contact/${value._id}`)
            }}>view</button>
          </div>
        );
      })}
    </div>
  );
};
export default ReadContact;
