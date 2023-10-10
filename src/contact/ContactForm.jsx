import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";

//fullName
//address
//phoneNumber
//email
 
let params =useParams()
let contactId = params.contactId
const ContactForm = () => {
  let [fullName, setFullName] = useState("");
  let [address, setAddress] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate()
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
            url: " http://localhost:8000/api/v1/contacts/${contactId}",
            method: "POST",
            data: data,
          });
          navigate("/contact")
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
