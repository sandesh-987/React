import React, { useState } from "react";

const Form = () => {
  let [firstName, setFirstName] = useState("");
  let [LastName, setLastName] = useState("");
  let [password, setPassWord] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNo, setPhoneNo] = useState("");
  let [description, setDescription] = useState("");
  let [isMarried, setIsMarried] = useState("");
  let [country, setCountry] = useState("");
  let [gender, setGender] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      _firstName: firstName,
      _LastName: LastName,
      _password: password,
      _email: email,
      _phoneNo: phoneNo,
      _description: description,
      _isMarried: isMarried,
      _country: country,
      _gender: gender,
    };
  };
  const countryOption=[
    {
      label:"selectCountry",
      value:"",
      disabled:true
    },
{
  label:"Nepal",
  value:"nep",
},
{
  label:"india",
  value:"ind",
},

{
  label:"china",
  value:"chi",
},

{
  label:"france",
  value:"fra",
},

{
  label:"bhutan",
  value:"bhu",
},
]
  let genderOption=[ 
{
  label:"Male",
  value:"male",
},
{
  label:"Female",
  value:"female",
},

{
  label:"Others",
  value:"other",
},
]
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="FirstName">First Name: </label>
        <input
          id="FirstName"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="LastName">Last Name: </label>
        <input
          id="LastName"
          type="text"
          value={LastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassWord(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="description">description: </label>
        <textarea
          id="description"
          type="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <br></br>
        <label htmlFor="country">Country:</label>
        <select
        id="country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          {
            countryOption.map((item,i)=>{
              return(
                <option value={item.value} disabled={item.disabled}>
                  {item.label}
                  </option>
              )
             
            })
          }
        </select>
        <br></br>
        <label>Gender:</label>
        {genderOption.map((item,i)=>{
          return(
            <div key={i}>
              <label htmlFor={item.value}>{item.label}</label>
              <input 
              id={item.value}
              type="radio"
              value={item.value}
              checked={gender === item.value}
              onChange={(e)=>{
                setGender(e.target.value)
              }}
              ></input>
            </div>
          )
        })}
        <br></br>
        <label htmlFor="isMarried">Is Married: </label>
        <input
          type="checkbox"
          id="isMarried"
          checked={isMarried}
          onChange={(e) => {
            setIsMarried(e.target.checked);
          }}
        ></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
