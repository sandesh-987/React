import React, { useState } from "react";

const LearnUsesState6 = () => {
  let [count, setCount] = useState(0);
  console.log("hello sir");
  let [count1, setCount1] = useState(100);
  return (
    <div>
      count is {count}
      <br></br>
      count is{count1}
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increse count1
      </button>
    </div>
  );
};

export default LearnUsesState6;
