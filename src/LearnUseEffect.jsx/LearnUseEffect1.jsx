import React, { useEffect, useState } from "react";

const LearnUseEffect1 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(100)
  useEffect(() => {
    console.log("i m useEffect");
  }, []);
  return (
    <div>
      LearnUseEffect 
      <br></br>
      count is {count}
      <br></br>
      count1 is {count1}
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        change count
      </button>
      <br></br>
      <button
      onClick={()=>{
        setCount1(count1+1)
      }}
      >count1</button>
    </div>
  );
};

export default LearnUseEffect1;
