import React, { useState } from "react";

const WhyLernUseState5 = () => {
  let [count,setCount]=useState(0)
  return (
    <div>
      Count is  {count}
      <br></br>
      <button onClick={() => setCount(count+1)}>Increment Count</button>
    </div>
  );
};

export default WhyLernUseState5;
