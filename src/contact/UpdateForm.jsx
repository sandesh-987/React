import React, { useEffect, useState } from "react";
import axios from "axios";

//fullName
//address
//phoneNumber
//email

const UpdateForm = () => {
  let [fullName, setFullName] = useState("");
  let [address, setAddress] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let contactId = "64f6c04fc722e5cb9555c26f"; 
  const getcontact = async ()=>{
    let result = await axios({
        url:` http://localhost:8000/api/v1/contacts/${contactId}`,
        method : `GET`,
    })
    let contact = result.data.data
    setFullName(contact.fullName)
    setAddress(contact.address)
    setPhoneNumber(contact.phoneNumber)
    setEmail(contact.email)
  }
  useEffect(()=>{
    getcontact()
  },[])
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          let data = {
            fullName: fullName,
            address: address,
            phoneNumber: phoneNumber,
            email: email,
          };

          // console.log(data);
          let results = await axios({
            url: ` http://localhost:8000/api/v1/contacts/${contactId}`,
            method: "PATCH",
            data: data
          });
        }}
      >
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
