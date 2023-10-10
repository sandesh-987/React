import React, { useState } from "react";

const LearnUseState1 = () => {
  let [name, setName] = useState("nitan");
  let [age, setAge] = useState(20);
  return (
    <div>
      {name}
      <br></br>
      {age}
      <br></br>
      <button
        onClick={() => {
          setName("RAM");
        }}
      >
        change name
      </button>
      <br></br>
      <button
        onClick={() => {
          setAge(22);
        }}
      >
        change age
      </button>
      <br></br>
      <button
        onClick={() => {
          setName("Ram");
          setAge(22);
        }}
      >
        change age and name
      </button>
    </div>
  );
};

export default LearnUseState1;
