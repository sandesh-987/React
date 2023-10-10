import React, { useState } from "react";

const  PassWordHideAndShow = () => {
  let [password, setPassword] = useState();
  let [type, setType] = useState("password");
  return (
    <div>
      <form>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type={type}
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <button
          type="button"
          onClick={() => {
            if (type === "password") {
              setType("text");   } else if (type === "text") {
                setType("password");
              }
            }}
          >
         {
          type==="password"? "ShowPassword" :"HidePassword"
         }
          </button>
        </form>
      </div>
    );
  };
  
  export default PassWordHideAndShow;